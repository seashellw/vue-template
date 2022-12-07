<script setup>
import { Menu as IconMenu, Compass } from "@element-plus/icons-vue";
import { useAppStore } from "@/store/app-store.js";

const appStore = useAppStore();
</script>

<template>
  <aside class="aside overflow-y-auto overflow-x-hidden">
    <ElMenu
      :collapse-transition="false"
      :default-active="$route.path"
      class="el-menu"
      :collapse="appStore.isFold"
      router
    >
      <ElMenuItem index="/home">
        <ElIcon><IconMenu /></ElIcon>
        <template #title> 主页 </template>
      </ElMenuItem>
      <ElMenuItem index="/top">
        <ElIcon><Compass /></ElIcon>
        <template #title> 热搜榜 </template>
      </ElMenuItem>
    </ElMenu>
  </aside>
</template>

<style scoped>
.aside {
  height: calc(100vh - var(--app-header-height));
  width: var(--app-aside-width);
}
</style>
