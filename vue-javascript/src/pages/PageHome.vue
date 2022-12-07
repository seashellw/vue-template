<script setup>
import { ElNotification } from "element-plus";

const test = () => {
  ElNotification.success({
    title: "Success",
    message: "This is a success message",
  });
};
</script>

<template>
  <p class="m-4">
    <ElButton @click="test"> hello world </ElButton>
  </p>
</template>

<style scoped></style>
