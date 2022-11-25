import { defineStore } from "pinia";
import { toRefs, reactive } from "vue";

export const useAppState = defineStore("app-state", () => {
  const state = reactive({
    count: 0,
  });

  const increment = () => {
    state.count++;
  };

  return {
    ...toRefs(state),
    increment,
  };
});
