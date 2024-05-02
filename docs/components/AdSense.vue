<script setup lang="ts">
import { ref } from 'vue'


const container = ref()


</script>

<template>
    <div class="AdSense" ref="container">
        <amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-1170355046794925"
            data-ad-slot="8233907109" data-auto-format="rspv" data-full-width="">
            <div overflow=""></div>
        </amp-ad>
        hello
    </div>
</template>

<style scoped>
.AdSense {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border-radius: 12px;
    min-height: 224px;
    text-align: center;
    line-height: 18px;
    font-size: 12px;
    font-weight: 500;
    background-color: var(--vp-carbon-ads-bg-color);
}

.AdSense :deep(img) {
    margin: 0 auto;
    border-radius: 6px;
}

/* .AdSense :deep(> div) {
    display: none;
} */

/* .AdSense :deep(> div:first-of-type) {
    display: block;
} */
</style>
