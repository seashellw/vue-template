<script setup>
import { useAppState } from "@/pages/app-state";
import {
  DArrowLeft,
  DArrowRight,
  MoonNight,
  Sunrise,
} from "@element-plus/icons-vue";
import { computed } from "vue";

const appState = useAppState();
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
    <h1 class="flex-grow text-lg">HEADER</h1>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--app-header-height);
  background-color: var(--el-bg-color-page);
  display: flex;
  padding: 0 10px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--el-border-color);
  z-index: 2;
}

.icon-button {
  font-size: 18px;
  height: auto;
}
</style>
