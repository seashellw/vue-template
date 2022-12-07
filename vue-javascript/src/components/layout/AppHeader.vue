<script setup>
import { useAppStore } from "@/store/app-store";
import { useStoreStorage } from "@/util/hooks";
import {
  DArrowLeft,
  DArrowRight,
  MoonNight,
  Sunrise,
} from "@element-plus/icons-vue";
import { computed } from "vue";

const appStore = useAppStore();
useStoreStorage(appStore);
const { toggleDarkMode, toggleFold } = appStore;
const DarkIcon = computed(() => (appStore.isDark ? Sunrise : MoonNight));
const FoldIcon = computed(() => (appStore.isFold ? DArrowRight : DArrowLeft));
</script>

<template>
  <header class="header backdrop-blur-md w-full flex px-2 items-center gap-2">
    <ElButton
      circle
      text
      :icon="FoldIcon"
      title="切换导航栏"
      class="icon-button"
      @click="toggleFold"
    />
    <RouterLink to="/">
      <img src="/vite.svg" alt="logo" class="logo-img mx-2" />
    </RouterLink>
    <h1 class="text-lg font-semibold mr-4">主标题</h1>
    <p class="flex-grow text-sm">副标题</p>
    <ElButton
      circle
      text
      :icon="DarkIcon"
      title="主题切换"
      class="icon-button"
      @click="toggleDarkMode"
    />
  </header>
</template>

<style scoped>
.header {
  height: var(--app-header-height);
  border-bottom: 1px solid var(--el-border-color);
}

.icon-button {
  font-size: 18px;
  height: auto;
}

.logo-img {
  width: 32px;
  height: 32px;
}
</style>
