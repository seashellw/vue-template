<script setup>
import { useAppState } from "@/pages/app-state.js";
import { Setting, Menu as IconMenu } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const appState = useAppState();
const route = useRoute();
</script>

<template>
  <aside class="aside">
    <ElMenu
      :collapse-transition="false"
      :default-active="route.path"
      class="el-menu"
      :collapse="appState.isFold"
      router
    >
      <ElMenuItem index="/home">
        <ElIcon>
          <IconMenu />
        </ElIcon>
        <template #title> 主页</template>
      </ElMenuItem>
      <ElMenuItem index="/top">
        <ElIcon>
          <Setting />
        </ElIcon>
        <template #title> 热搜榜</template>
      </ElMenuItem>
    </ElMenu>
  </aside>
</template>

<style scoped>
.aside {
  position: fixed;
  top: var(--app-header-height);
  left: 0;
  height: calc(100vh - var(--app-header-height));
  width: var(--app-aside-width);
  background-color: var(--el-bg-color-page);
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid var(--el-border-color);
}

.aside:deep(.el-menu) {
  border-right: none;
}
</style>
