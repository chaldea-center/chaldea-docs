<script setup lang="ts">
import { useRouteLocale } from '@vuepress/client'
import { DefaultThemeData } from '@vuepress/theme-default'
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import type { ThemeLocaleDataRef } from '@vuepress/plugin-theme-data/client'
import { useRoute } from 'vue-router'

const routeLocale = useRouteLocale()
const themeLocale: ThemeLocaleDataRef<DefaultThemeData> = useThemeLocaleData()

const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)]
const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'

const _getGuideLink = () => {
  const route = useRoute()
  return route.path.indexOf('/guide') === -1
    ? routeLocale.value +
        'guide/' +
        route.path.substring(routeLocale.value.length)
    : ''
}
</script>

<template>
  <div class="theme-container">
    <main class="page">
      <div class="theme-default-content">
        <h1>404</h1>

        <blockquote>{{ getMsg() }}</blockquote>
        <template v-if="_getGuideLink()">
          <p>
            Try
            <RouterLink :to="_getGuideLink()">{{ _getGuideLink() }}</RouterLink>
            ?
          </p>
        </template>
        <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
      </div>
    </main>
  </div>
</template>
