# 已知Bug


## Windows版打开文件夹失败

```:no-line-numbers
PlatformException(open_error, Failed to open file:///D:/%E4%B8%8B%E8%BD%BD/chaldea/userdata/temp/installer: 
ShellExecute error code 2, null, null)
```
此处`%E4%B8%8B%E8%BD%BD=下载`

仅当路径中包含非ASCII字符时，如中文。因此若程序保存路径包含中文，则app不能打开其相关子目录。

- 出现: 2.0.11
- 修复: 2.1.1

用例: 打开数据目录、下载安装包所在目录、保存图片所在目录等。
