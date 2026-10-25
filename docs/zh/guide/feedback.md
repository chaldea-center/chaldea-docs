---
title: 联系页面地址已更新
layout: page
head:
  - - meta
    - http-equiv: refresh
      content: '0; url=./contact'
  - - meta
    - name: robots
      content: noindex, follow
  - - link
    - rel: canonical
      href: https://docs.chaldea.center/zh/guide/contact
---

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const target = new URL('./contact', window.location.href)
  target.search = window.location.search
  target.hash = window.location.hash
  window.location.replace(target.href)
})
</script>

[前往联系我们](./contact)
