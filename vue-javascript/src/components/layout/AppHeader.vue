<script setup>
import { useAppState } from "@/pages/app-state";
import { Sunrise, MoonNight } from "@element-plus/icons-vue";
import { computed } from "vue";
const appState = useAppState();
const { toggleDarkMode } = appState;
const ButtonDarkIcon = computed(() => (appState.isDark ? Sunrise : MoonNight));
</script>

<template>
  <header class="header">
    <h1 class="flex-grow text-lg">HEADER</h1>
    <ElButton
      circle
      :icon="ButtonDarkIcon"
      title="主题切换"
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
}
</style>
