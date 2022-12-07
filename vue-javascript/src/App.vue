<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";

const AppAside = defineAsyncComponent(() =>
  import("@/components/layout/AppAside.vue")
);
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <AppHeader class="header" />
    <section class="flex">
      <Suspense>
        <AppAside class="aside" />
      </Suspense>
      <main class="main">
        <RouterView v-slot="{ Component: C }">
          <KeepAlive>
            <Component
              :is="C"
              v-if="$route.meta.keepAlive"
              :key="$route.path"
            />
          </KeepAlive>
          <Component :is="C" v-if="!$route.meta.keepAlive" :key="$route.path" />
        </RouterView>
      </main>
    </section>
  </ElConfigProvider>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
}

.aside {
  position: sticky;
  top: var(--app-header-height);
  flex-grow: 0;
  flex-shrink: 0;
}

.main {
  padding: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
}
</style>
