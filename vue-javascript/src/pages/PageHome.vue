<script setup>
import { ElMessage } from "element-plus";
import { ref } from "vue";

const count = ref(1);

const handleClick = () => {
  count.value++;
  ElMessage({
    message: `You clicked ${count.value} times`,
    type: "success",
  });
};
</script>

<template>
  <p class="m-4">
    This is the home page. It is a simple page that does not use any components.
    <ElButton @click="handleClick">
      {{ count }}
    </ElButton>
  </p>
</template>

<style scoped>
.page-home {
  margin: 10px;
}
</style>
