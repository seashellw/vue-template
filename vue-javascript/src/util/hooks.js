import { reactive, toRefs, watch } from "vue";
import destr from "destr";
import { merge, throttle } from "lodash-es";
import { useRouter } from "vue-router";

/**
 * 本地存储store数据，用于持久化
 */
export const useStoreStorage = (store) => {
  if (!store.$id) {
    throw new Error("useStoreStorage: store.$id is undefined");
  }
  const oldData = destr(localStorage.getItem(store.$id));
  if (oldData instanceof Object) {
    merge(store.$state, oldData);
  }
  watch(
    store,
    (val) => {
      localStorage.setItem(store.$id, JSON.stringify(val.$state));
    },
    { deep: true }
  );
};

/**
 * 将状态存储在url中
 */
export const useQueryReactive = (defaultValue) => {
  const state = reactive(defaultValue);
  const router = useRouter();
  const query = router.currentRoute.value.query;
  const keys = [];
  for (const key in state) {
    switch (typeof state[key]) {
      case "number":
        keys.push(key);
        state[key] = parseFloat(query[key]) || state[key];
        break;
      case "boolean":
        keys.push(key);
        state[key] =
          query[key] === "true"
            ? true
            : query[key] === "false"
            ? false
            : state[key];
        break;
      case "string":
        keys.push(key);
        state[key] = query[key] || state[key];
        break;
    }
  }
  watch(state, (val) => {
    const query = { ...router.currentRoute.value.query };
    for (const key of keys) {
      query[key] = val[key];
    }
    router.replace({ query });
  });
  return state;
};

/**
 * 发起异步请求。节流，依赖刷新，自动执行。
 * fn 为异步请求函数，
 * throttleMs 节流时间，
 * refreshDeps 依赖，当依赖变化时，重新执行请求，
 * auto 是否自动执行
 */
export const useFetch = (
  fn,
  { throttleMs = 0, refreshDeps = [], auto = true } = {}
) => {
  const state = reactive({
    loading: false,
    data: null,
    error: null,
  });
  const run = throttle(async () => {
    state.loading = true;
    try {
      state.data = await fn();
    } catch (err) {
      state.error = err;
    } finally {
      state.loading = false;
    }
  }, throttleMs);
  if (auto) run();
  watch(refreshDeps, run);
  return { ...toRefs(state), run };
};
