<script setup>
import PaginationPro from "@/components/public/PaginationPro.vue";
import { toolsTopSearch } from "@/http/api.js";
import { useFetch, useQueryReactive } from "@/util/hooks";

const page = useQueryReactive({
  current: 1,
  pageSize: 10,
  type: undefined,
});

const { data, loading, run } = useFetch(async () => {
  let res = await toolsTopSearch({
    ...page,
  });
  page.current = res.data?.current;
  return res.data;
});

const typeOptions = ["微博", "哔哩哔哩", "知乎", "百度"];
</script>

<template>
  <ul class="query-box flex m-2 py-2 px-4 flex-wrap">
    <li class="flex items-center">
      类型：
      <ElSelect v-model="page.type" clearable @change="run">
        <ElOption v-for="item in typeOptions" :key="item" :value="item" />
      </ElSelect>
    </li>
  </ul>
  <ElTable v-loading="loading" :data="data?.list" height="25rem">
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

<style scoped>
.query-box {
  border-radius: 5px;
  border: 1px solid var(--el-border-color);
}
</style>
