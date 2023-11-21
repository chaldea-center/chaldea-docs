# Deep

In FGO request, there are two important parameters related to user's device:

- `UserAgent`: in http headers. Probably FGO won't check it.
- `deviceInfo`: in login post body. FGO will record this value in server and verify it when user requests reset Transfer Code (引き継ぎナンバー) via email which will ask user to provide last played device.

## UserAgent

On Android, get UA from system:

```java
// Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1
System.getProperty("http.agent");
```

Example:

```py
"Dalvik/2.1.0 (Linux; U; Android 8.1; SM-G9500 Build/V417IR)"  # MuMu
"Dalvik/2.1.0 (Linux; U; Android 7.1.2; V1938CT Build/N2G48C)" # LD5

f"Dalvik/2.1.0 (Linux; U; Android {version.release}; {model} Build/{id})"
```

On iOS, it defaults to the app's UserAgent (not sure)

```py
"FateGO/2.80.5 CFNetwork/1474 Darwin/23.0.0"

f"FateGO/{fgover} CFNetwork/{cfnetworkver} Darwin/{utsname.release}"
```

## deviceInfo

```cpp
void __fastcall NetworkManager__SetDeviceInfoField(RequestBase_o *request, const MethodInfo *method)
{
  __int64 v3; // x1
  Il2CppObject *deviceModel; // x20
  Il2CppObject *operatingSystem; // x0
  System_String_o *v6; // x0

  deviceModel = (Il2CppObject *)UnityEngine_SystemInfo__get_deviceModel(0LL);
  operatingSystem = (Il2CppObject *)UnityEngine_SystemInfo__get_operatingSystem(0LL);
  v6 = System_String__Format_43739268((System_String_o *)StringLiteral_23458, deviceModel, operatingSystem, 0LL);
  RequestBase__addField_30957164(request, (System_String_o *)StringLiteral_17935, v6, 0LL);
}
```

Here format template is `{0} / {1}`.

### deviceModel

[Unity SystemInfo.deviceModel](https://docs.unity3d.com/ScriptReference/SystemInfo-deviceModel.html)

On Android:

```py
"samsung SM-G9500"
f"{manufacturer} {model}"
```

On iOS:

```
"iPhone6,1"
```

In device_info plugin is `iosInfo.utsname.machine`

### operatingSystem

[Unity SystemInfo.operatingSystem](https://docs.unity3d.com/ScriptReference/SystemInfo-operatingSystem.html)

On Android:

```py
f"Android OS 7.1.2 / API-25 (N2G48C/4565141)"

f"Android OS {version.release} / API-{version.sdkInt} ({id}/{version.incremental})"
```

On iOS:

```
// Prints "iPhone OS" with iOS 15.3.1
// Prints "iPad OS" on iPad with iOS 16
```
