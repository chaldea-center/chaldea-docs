---
title: Contact page moved
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
      href: https://docs.chaldea.center/guide/contact
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

[Continue to Contact Us](./contact)
