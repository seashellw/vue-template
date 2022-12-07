<script setup>
import { useVModels } from "@vueuse/core";
const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["update:current", "update:pageSize", "change"]);
const { current, pageSize } = useVModels(props, emit);
const handleSizeChange = (val) => {
  emit("change", { current, pageSize: val, total: props.total });
};
const handleCurrentChange = (val) => {
  emit("change", { current: val, pageSize, total: props.total });
};
</script>

<template>
  <ElPagination
    v-model:current-page="current"
    v-model:page-size="pageSize"
    :page-sizes="[5, 10, 20, 30]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    class="m-2"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<style scoped></style>
