param(
    [string]$UserDir = "$env:APPDATA\Code\User"
)

$ErrorActionPreference = "Stop"
$SourceDir = Split-Path -Parent $MyInvocation.MyCommand.Path

if (-not (Get-Command code -ErrorAction SilentlyContinue)) {
    throw "VS Code command 'code' was not found. Install VS Code first, then enable the command from PATH."
}

New-Item -ItemType Directory -Force -Path $UserDir | Out-Null

$settings = Join-Path $SourceDir "settings.json"
$keybindings = Join-Path $SourceDir "keybindings.json"
$snippets = Join-Path $SourceDir "snippets"
$extensions = Join-Path $SourceDir "extensions.txt"

if (Test-Path -LiteralPath $settings) {
    Copy-Item -LiteralPath $settings -Destination (Join-Path $UserDir "settings.json") -Force
}

if (Test-Path -LiteralPath $keybindings) {
    Copy-Item -LiteralPath $keybindings -Destination (Join-Path $UserDir "keybindings.json") -Force
}

if (Test-Path -LiteralPath $snippets) {
    Copy-Item -LiteralPath $snippets -Destination (Join-Path $UserDir "snippets") -Recurse -Force
}

if (Test-Path -LiteralPath $extensions) {
    Get-Content -LiteralPath $extensions |
        Where-Object { $_ -and -not $_.StartsWith("#") } |
        ForEach-Object { code --install-extension $_ }
}

Write-Host "VS Code profile import finished."
