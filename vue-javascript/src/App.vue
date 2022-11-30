<script setup>
import AppAside from "@/components/layout/AppAside.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import { RouterView } from "vue-router";
import { defineAsyncComponent } from "vue";

const AppFooter = defineAsyncComponent(() =>
  import("@/components/layout/AppFooter.vue")
);
</script>

<template>
  <AppHeader />
  <AppAside />
  <main class="main">
    <RouterView />
  </main>
  <Suspense>
    <AppFooter />
  </Suspense>
</template>

<style scoped>
.main {
  padding: calc(var(--app-header-height) + 10px) 10px 10px
    calc(var(--app-aside-width) + 10px);
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
}
</style>
