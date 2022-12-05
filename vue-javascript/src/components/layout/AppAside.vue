<script setup>
import { useAppStore } from "@/store/app-store.js";
import { Setting, Menu as IconMenu } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const appStore = useAppStore();
const route = useRoute();
</script>

<template>
  <aside class="aside">
    <ElMenu
      :collapse-transition="false"
      :default-active="route.path"
      class="el-menu"
      :collapse="appStore.isFold"
      router
    >
      <ElMenuItem index="/home">
        <ElIcon>
          <IconMenu />
        </ElIcon>
        <template #title> 主页 </template>
      </ElMenuItem>
      <ElMenuItem index="/top">
        <ElIcon>
          <Setting />
        </ElIcon>
        <template #title> 热搜榜 </template>
      </ElMenuItem>
    </ElMenu>
  </aside>
</template>

<style scoped>
.aside {
  height: calc(100vh - var(--app-header-height));
  width: var(--app-aside-width);
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid var(--el-border-color);
}

.aside:deep(.el-menu) {
  border-right: none;
}
</style>
