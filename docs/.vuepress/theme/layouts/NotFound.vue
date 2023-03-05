<script setup lang="ts">
// @ts-ignore
import Navbar from '@theme/Navbar.vue'
// @ts-ignore
import Sidebar from '@theme/Sidebar.vue'
import { useRouteLocale } from '@vuepress/client'
import type { ThemeLocaleDataRef } from '@vuepress/plugin-theme-data/client'
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import { DefaultThemeData } from '@vuepress/theme-default'
import { useSidebarItems } from '@vuepress/theme-default/client'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NotFoundAnime from '../components/NotFoundAnime.vue'

const routeLocale = useRouteLocale()
const themeLocale: ThemeLocaleDataRef<DefaultThemeData> = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(() => themeLocale.value.navbar !== false)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
  },
])
// close sidebar after navigation
let unregisterRouterHook: () => void
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})

// 404 content
const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)]
const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'

const router = useRouter()
const route = useRoute()

const _guideLink =
  route.path.indexOf('/guide') === -1
    ? routeLocale.value +
      'guide/' +
      route.path.substring(routeLocale.value.length)
    : ''
if (_guideLink) {
  for (const entry of router.getRoutes()) {
    if (entry.path === _guideLink) {
      router.push(_guideLink)
      break
    }
  }
}
</script>

<template>
  <div class="theme-container" :class="containerClass">
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"> </Navbar>
    <Sidebar></Sidebar>

    <main class="page">
      <div class="theme-default-content">
        <NotFoundAnime></NotFoundAnime>
        <blockquote>{{ getMsg() }}</blockquote>
        <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
      </div>
    </main>
  </div>
</template>
