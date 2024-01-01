# 小工具

## 国服抓包数据解码

[解码小工具](./import_https/decoder.md)

## 合并语音文件

一行一个语音url或停顿时间(秒)，例:
```
https://example.com/1.mp3
0.1
https://example.com/2.mp3
0.2
```

<AudioMerger></AudioMerger>

<script setup>
import AudioMerger from '../../components/AudioMerger.vue'
</script>
