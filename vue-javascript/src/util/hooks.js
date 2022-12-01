import { watch } from "vue";
import destr from "destr";
import { merge } from "lodash-es";

/**
 * 单向同步ref到另一个ref
 */
export const useSyncTo = (ref1, ref2) => {
  watch(ref1, (val) => (ref2.value = val), { immediate: true });
};

/**
 * 本地存储pinia store数据，用于持久化，在下次打开页面时恢复数据
 */
export const useStoreStorage = (store) => {
  if (!store.$id) {
    throw new Error("useStoreStorage: store.$id is undefined");
  }
  const oldData = destr(localStorage.getItem(store.$id));
  if (oldData instanceof Object) {
    merge(store, oldData);
  }
  watch(
    store,
    (val) => {
      localStorage.setItem(store.$id, JSON.stringify(val));
    },
    { deep: true }
  );
};
