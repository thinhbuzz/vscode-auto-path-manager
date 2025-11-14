# **Auto Path Manager**

[![Version](https://img.shields.io/badge/version-1.0.5-blue.svg)](https://github.com/thinhbuzz/vscode-auto-path-manager)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/thinhbuzz/vscode-auto-path-manager/blob/main/LICENSE)

Automatically add predefined and user-configured directories (e.g., `node_modules/.bin`, `vendor/bin`) to the terminal's PATH in Visual Studio Code. Simplify access to local binaries and tools without manual configuration.

---

## **Features**
- **Predefined Directories**: Automatically includes common directories like `node_modules/.bin` and `vendor/bin`.
- **Customizable Paths**: Allows users to add their own directories via settings.
- **Seamless Integration**: Works transparently with VSCode terminals without requiring manual setup.
- **Cross-Platform Support**: Compatible with Windows, macOS, and Linux.

---

## **Installation**

### **From Visual Studio Code Marketplace**
1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X` (`Cmd+Shift+X` on macOS).
3. Search for **"Auto Path Manager"**.
4. Click **Install**.

### **From Source**
1. Clone this repository:
   ```bash
   git clone https://github.com/thinhbuzz/vscode-auto-path-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vscode-auto-path-manager
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Build the extension:
   ```bash
   pnpm run compile
   ```
5. Press `F5` to open a new VSCode window with the extension loaded.

---

## **Configuration**

### **Default Paths**
The extension automatically checks for the following predefined directories:
- `node_modules/.bin`
- `vendor/bin`

### **Custom Paths**
You can add custom directories by modifying the settings:
1. Open **Settings** (`Ctrl+,` or `Cmd+,`).
2. Search for **"Auto Path Manager"**.
3. Add your custom directories under the `autoAddPathsToTerminal.additionalPaths` setting.

Alternatively, you can edit the `settings.json` file directly:
```json
"autoAddPathsToTerminal.additionalPaths": [
    "custom/bin",
    "tools/bin"
]
```

---

## **Usage**
1. Open a terminal in VSCode.
2. The extension will automatically add the configured directories to the terminal's PATH.
3. Verify the updated PATH:
    - On macOS/Linux:
      ```bash
      echo $PATH
      ```
    - On Windows:
      ```cmd
      echo %PATH%
      ```

---

## **Contributing**
We welcome contributions from the community! Here’s how you can help:

1. **Fork the Repository**: Click the "Fork" button on the top-right corner of this page.
2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/thinhbuzz/vscode-auto-path-manager.git
   ```
3. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Changes**: Implement your changes or fixes.
5. **Test Locally**: Ensure the extension works as expected by running it in a VSCode debug environment.
6. **Submit a Pull Request**: Push your changes and create a pull request to the `main` branch.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](https://github.com/thinhbuzz/vscode-auto-path-manager/blob/main/LICENSE) file for details.

---

## **Credits**
- Inspired by the need to simplify PATH management in VSCode terminals.
- Built using the [VSCode Extension API](https://code.visualstudio.com/api).

---

## **Support**
If you encounter any issues or have suggestions, please open an issue in the [GitHub Issues](https://github.com/thinhbuzz/vscode-auto-path-manager/issues) section.

---

## **Author**
- **Name**: Thinh Buzz
- **GitHub**: [thinhbuzz](https://github.com/thinhbuzz)
