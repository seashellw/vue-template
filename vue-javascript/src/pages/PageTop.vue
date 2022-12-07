<script setup>
import PaginationPro from "@/components/public/PaginationPro.vue";
import { toolsTopSearch } from "@/http/api.js";
import { useFetch, useQueryReactive } from "@/util/hooks";
import { addPageIndex } from "@/util/util-func";

const query = useQueryReactive({
  current: 1,
  pageSize: 10,
  type: "",
});

const { data, loading, run } = useFetch(async () => {
  let res = await toolsTopSearch({
    ...query,
    type: query.type || undefined,
  });
  query.current = res.data?.current;
  let list = addPageIndex(res.data.list, query.current, query.pageSize);
  return { ...res.data, list };
});

const typeOptions = ["微博", "哔哩哔哩", "知乎", "百度"];
</script>

<template>
  <ul class="query-box flex m-2 py-2 px-4 flex-wrap">
    <li class="flex items-center">
      类型：
      <ElSelect v-model="query.type" clearable @change="run">
        <ElOption v-for="item in typeOptions" :key="item" :value="item" />
      </ElSelect>
    </li>
  </ul>
  <ElTable v-loading="loading" :data="data?.list" height="25rem">
    <ElTableColumn label="序号" prop="index" width="80" />
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
    v-model:current="query.current"
    v-model:pageSize="query.pageSize"
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
