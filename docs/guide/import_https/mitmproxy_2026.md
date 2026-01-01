# FGO Data Capture: Automation Solution (2026 Edition)

::: info Special Disclaimer
1. **Scope**: The following statements apply only to the "FGO Login Data Automation Capture Tool (including run.bat and fgo_cap.py)".
2. **Server Support**: This tool ONLY supports the **Mainland China (CN)** and **Taiwan (TW)** servers operated by bilibili. It **DOES NOT support** Japanese (JP), Korean (KR), or North American (NA) servers.
3. **Ownership**: This tool and its documentation do not represent the position of this site or the Chaldea Project team.
:::

> **[ Legal Statement and Authorization ]**
>
> * **Project Independence**: This script and related tools are independently developed third-party auxiliary tools. Their ownership **does not belong** to the official developers of "Fate/Grand Order," their affiliates, or the Chaldea Project team.
> * **Technical Background**: The core logic, environment self-check process, and this documentation were designed and written with the assistance of **AI (Artificial Intelligence)**.
> * **Copyright and Licensing**: No copyright restrictions are placed on this tool. The developer welcomes and encourages any individual or organization to study, modify, secondary develop, extend features, and distribute or promote it within the community.
> * **Disclaimer**: This tool is for technical exchange and learning purposes only, aimed at optimizing the user data management experience. The developer and the AI collaborator shall not be held liable for any direct or indirect consequences (such as account abnormalities, privacy leaks, etc.) resulting from the use of this tool. Users must comply with local laws, regulations, and game service agreements.
> * **Security Tip**: The captured raw login data contains sensitive credentials. **Please keep it secure and never share it with others.**

---

## 0. Tool Download and Preparation

Choose one of the following methods to obtain the tool based on your environment:

### Method A: Light Package (Engine not included)
1. **Script**: Download the mirrored [`fgo_cap.zip`](http://url) and extract it.
2. **Engine**: Download [mitmproxy 12.2.1 Portable Edition](https://downloads.mitmproxy.org/12.2.1/mitmproxy-12.2.1-windows-x86_64.zip). Extract **`mitmdump.exe`** to the same directory as the script, or install it via pip.

### Method B: All-in-One Package (Engine included)
Includes a pre-configured execution environment.
* **Download Link**: [Baidu Netdisk](https://pan.baidu.com/s/1EBaW7WSD_TAqpucWSQIBzQ?pwd=kedi) (Password: `kedi`)

---

## 1. Emulator Preparation (MuMu 12)

Please complete the following settings and **restart the emulator**, otherwise the script will be unable to perform low-level operations:

| Setting | Path | Value |
| :--- | :--- | :--- |
| **Root Permission** | [Device Settings] - [Others] | **On** |
| **System Disk Writable** | [Device Settings] - [Disk] | Select **"Writable System Disk"** |
| **ADB Debugging** | [Device Settings] - [Others] | Select **"Enable Local Connection"** |

---

## 2. Operation and Capture Flow

1. **Start Script**: Double-click **`run.bat`**. Wait for the self-check to complete until you see `[🚀] 正在监听...`.
2. **Login to Game**: Launch FGO in the emulator. Enter the game until you see the "Globe" screen or the "Event Announcement."
3. **Auto-Finish**: Once capture is successful, the window will display `[🎯] 捕获成功!` and **automatically close after cleanup**. The data is now stored in your clipboard.

::: danger Notice: Manual Exit and Network Recovery
* **Proper Exit**: If you need to stop manually, press **`Ctrl + C`** in the window. **Do not** directly click the red [X] in the top-right corner.
* **Network Fix**: If the emulator cannot access the internet due to an abnormal shutdown, **run `run.bat` again and press `Ctrl + C` to exit properly**, or go to emulator [Wi-Fi Settings] and set [Proxy] to **"None"**.
:::

---

## 3. Import to Chaldea

1. Open the **Chaldea** client.
2. Go to the data import page, select **[Import HTTPS Capture Data]** -> **[Import from Clipboard]** to complete the process.

---

## 4. Script Workflow

| Step | Execution Logic |
| :--- | :--- |
| **Cert Generation** | Searches for the CA certificate in the user directory; if missing, silently launches `mitmdump` in the background to generate it. |
| **ADB Search** | Locates and calls the native `adb.exe` within the emulator's installation directory by retrieving the file path of the `MuMuNxDevice` process. |
| **ADB Connection** | Executes `kill-server` and `start-server` sequentially to reset services; establishes a connection via a `127.0.0.1:5555` handshake. |
| **Cert Injection** | Compares user directory certificates with emulator system certificates based on **MD5 hashes**; uploads and overwrites if the certificate is missing or hashes mismatch. |
| **Proxy Configuration** | Automatically resolves the active LAN IP of the host machine; injects proxy parameters into the emulator's global settings via the `adb shell settings` interface. |
| **Capture Analysis** | Matches specific interface suffixes (`_key=toplogin`); extracts the raw response body and writes it to the Windows clipboard via a system pipe. |
| **Proxy Cleanup** | Monitors for successful capture or `Ctrl + C` signals; resets the emulator's global proxy to off (`:0`) to restore the network environment. |
