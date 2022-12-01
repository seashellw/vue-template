<script setup>
import { useAppState } from "@/pages/app-state";
import {
  DArrowLeft,
  DArrowRight,
  MoonNight,
  Sunrise,
} from "@element-plus/icons-vue";
import { computed } from "vue";
import { useStoreStorage } from "@/util/hooks";

const appState = useAppState();
useStoreStorage(appState);
const { toggleDarkMode, toggleFold } = appState;
const DarkIcon = computed(() => (appState.isDark ? Sunrise : MoonNight));
const FoldIcon = computed(() => (appState.isFold ? DArrowRight : DArrowLeft));
</script>

<template>
  <header class="header">
    <ElButton
      circle
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
      :icon="DarkIcon"
      title="主题切换"
      class="icon-button"
      @click="toggleDarkMode"
    />
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: var(--app-header-height);
  background-color: var(--el-bg-color-page);
  display: flex;
  padding: 0 10px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--el-border-color);
}

.icon-button {
  font-size: 18px;
  height: auto;
}

.logo-img {
  width: 35px;
  height: 35px;
}
</style>
