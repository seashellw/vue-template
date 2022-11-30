import { watch } from "vue";

export const useSyncTo = (ref1, ref2) => {
  watch(ref1, (val) => (ref2.value = val), { immediate: true });
};
