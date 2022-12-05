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
  <ElTable v-loading="loading" :data="data" max-height="500px">
    <ElTableColumn prop="name" label="标题">
      <template #default="{ row }">
        <ElLink :href="row.url" target="_blank">
          {{ row.name }}
        </ElLink>
      </template>
    </ElTableColumn>
    <ElTableColumn prop="hot" label="热度" width="180" />
  </ElTable>
</template>

<style scoped></style>
