<script setup></script>

<template>
  <aside class="aside">Aside</aside>
</template>

<style scoped>
.aside {
  position: fixed;
  top: var(--app-header-height);
  left: 0;
  height: calc(100vh - var(--app-header-height));
  width: var(--app-aside-width);
  background-color: var(--el-bg-color-page);
  border-right: 1px solid var(--el-border-color);
}
</style>
