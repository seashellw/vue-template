<script setup>
import { onMounted, ref } from "vue";
import { toolsTopSearch } from "@/http/api.js";

const tableData = ref([]);
const fetchData = async () => {
  let res = await toolsTopSearch();
  tableData.value = res.data.list.map((item) => ({
    ...item,
    url: `https://cn.bing.com/search?q=${encodeURIComponent(item.name)}`,
  }));
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <el-table :data="tableData" max-height="500px">
    <el-table-column prop="name" label="标题">
      <template #default="{ row }">
        <el-link :href="row.url" target="_blank">{{ row.name }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="hot" label="热度" width="180" />
  </el-table>
</template>

<style scoped></style>
