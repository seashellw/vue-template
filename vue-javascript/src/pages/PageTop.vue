<script setup>
import { toolsTopSearch } from "@/http/api.js";
import { useFetch } from "@/util/hooks";

const { data, loading } = useFetch(async () => {
  let res = await toolsTopSearch();
  return res.data.list.map((item) => ({
    ...item,
    url: `https://cn.bing.com/search?q=${encodeURIComponent(item.name)}`,
  }));
});
</script>

<template>
  <el-table v-loading="loading" :data="data" max-height="500px">
    <el-table-column prop="name" label="标题">
      <template #default="{ row }">
        <el-link :href="row.url" target="_blank">{{ row.name }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="hot" label="热度" width="180" />
  </el-table>
</template>

<style scoped></style>
