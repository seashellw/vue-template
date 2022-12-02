<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import { RouterView } from "vue-router";
import { defineAsyncComponent } from "vue";
const AppAside = defineAsyncComponent(() =>
  import("@/components/layout/AppAside.vue")
);
const AppFooter = defineAsyncComponent(() =>
  import("@/components/layout/AppFooter.vue")
);
</script>

<template>
  <AppHeader class="header" />
  <section class="flex">
    <Suspense>
      <AppAside class="aside" />
    </Suspense>
    <main class="main">
      <RouterView v-slot="{ Component: C }">
        <KeepAlive>
          <Component :is="C" v-if="$route.meta.keepAlive" :key="$route.path" />
        </KeepAlive>
        <Component :is="C" v-if="!$route.meta.keepAlive" :key="$route.path" />
      </RouterView>
    </main>
  </section>
  <Suspense>
    <AppFooter />
  </Suspense>
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
  min-height: 100vh;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
}
</style>
