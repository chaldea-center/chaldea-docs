# Known Issues

## Cannot open folder on Windows

```:no-line-numbers
PlatformException(open_error, Failed to open file:///D:/%E4%B8%8B%E8%BD%BD/chaldea/userdata/temp/installer: 
ShellExecute error code 2, null, null)
```
Here `%E4%B8%8B%E8%BD%BD=下载`

Failed if file path contains non-ASCII characters.

- Caused: 2.0.11
- Fixed: 2.1.1

Use cases: open folder for user data, downloaded app upgrades, merged images, etc.
