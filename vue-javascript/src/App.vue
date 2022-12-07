<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import "dayjs/locale/zh-cn";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/es/components/message-box/style/css";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/notification/style/css";
import { defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";

const AppAside = defineAsyncComponent(() =>
  import("@/components/layout/AppAside.vue")
);
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <AppHeader class="header sticky top-0" />
    <section class="flex">
      <Suspense>
        <AppAside class="aside sticky flex-grow-0 flex-shrink-0" />
      </Suspense>
      <main class="main p-2 flex-grow flex-shrink overflow-hidden">
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
  z-index: 10;
}

.aside {
  top: var(--app-header-height);
}
</style>
