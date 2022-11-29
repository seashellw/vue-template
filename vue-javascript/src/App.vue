<script setup>
import AppAside from "@/components/layout/AppAside.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <AppHeader />
  <AppAside />
  <main class="main">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
.main {
  padding-top: var(--app-header-height);
  padding-left: var(--app-aside-width);
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
}
</style>
