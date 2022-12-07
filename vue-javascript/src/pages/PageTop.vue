<script setup>
import PaginationPro from "@/components/public/PaginationPro.vue";
import { toolsTopSearch } from "@/http/api.js";
import { useFetch, useQueryReactive } from "@/util/hooks";

const page = useQueryReactive({
  current: 1,
  pageSize: 10,
});

const { data, loading, run } = useFetch(async () => {
  let res = await toolsTopSearch({
    ...page,
  });
  page.current = res.data?.current;
  return res.data;
});
</script>

<template>
  <ElTable v-loading="loading" :data="data?.list">
    <ElTableColumn label="标题">
      <template #default="{ row }">
        <ElLink :href="row.url" target="_blank">
          {{ row.title }}
        </ElLink>
      </template>
    </ElTableColumn>
    <ElTableColumn label="类型" width="120">
      <template #default="{ row }">
        <ElTag>{{ row.type }}</ElTag>
      </template>
    </ElTableColumn>
  </ElTable>
  <PaginationPro
    v-model:current="page.current"
    v-model:pageSize="page.pageSize"
    :total="data?.total"
    @change="run"
  />
</template>

<style scoped></style>
