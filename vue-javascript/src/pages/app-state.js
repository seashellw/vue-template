import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";

export const useAppState = defineStore("app-state", () => {
  const state = reactive({
    isDark: localStorage.getItem("is-dark") === "true",
  });

  const toggleDarkMode = () => {
    let dark = !state.isDark;
    state.isDark = dark;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("is-dark", dark ? "true" : "false");
  };

  return {
    ...toRefs(state),
    toggleDarkMode,
  };
});
