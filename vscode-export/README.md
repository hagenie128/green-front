# VS Code Profile Export

This folder contains the current VS Code user profile files:

- `extensions.txt`: installed extension IDs
- `settings.json`: user settings
- `keybindings.json`: keyboard shortcuts
- `snippets/`: user snippets, if any
- `install-vscode-profile.ps1`: import helper for another Windows computer

## Import On Another Windows Computer

1. Install VS Code.
2. Copy this whole `vscode-export` folder to the other computer.
3. Open PowerShell in this folder.
4. Run:

```powershell
.\install-vscode-profile.ps1
```

If script execution is blocked, run this command in the same PowerShell window first:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
