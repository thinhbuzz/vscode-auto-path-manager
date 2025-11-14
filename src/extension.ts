import { existsSync } from "fs";
import { delimiter, join } from "path";
import { ExtensionContext, workspace, WorkspaceFolder } from "vscode";

export function fileExistsSync(filePath: string): boolean {
  return existsSync(filePath);
}

export function handleEnvForWorkspace(
  context: ExtensionContext,
  workspaceFolder: WorkspaceFolder
) {
  try {
    const workspacePath = workspaceFolder.uri.fsPath;

    // Get directory lists from settings
    const config = workspace.getConfiguration("autoAddPathsToTerminal");
    const defaultPaths = config.get<string[]>("defaultPaths") || [];
    const userPaths = config.get<string[]>("additionalPaths") || [];
    const allPaths = [...defaultPaths, ...userPaths];

    const pathsToAdd = allPaths
      .map((relativePath) => join(workspacePath, relativePath))
      .filter((absolutePath) => fileExistsSync(absolutePath));

    if (pathsToAdd.length > 0) {
      // Update PATH variable
      const paths = [''].concat(pathsToAdd).concat('').join(delimiter);
      console.log("Updating PATH:", paths, "in", workspacePath);
      context.environmentVariableCollection.append("PATH", paths, {
        applyAtProcessCreation: true,
        applyAtShellIntegration: true,
      });
    }
  } catch (error) {
    // Handle errors gracefully
    console.error("Error updating PATH:", error);
  }
}

export function activate(context: ExtensionContext) {
  workspace.workspaceFolders?.forEach((workspaceFolder) =>
    handleEnvForWorkspace(context, workspaceFolder)
  );
}

export function deactivate() {}
