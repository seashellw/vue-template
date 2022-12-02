import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useAppStore = defineStore("app-store", () => {
  const isDark = ref(localStorage.getItem("is-dark") === "true");
  watch(isDark, (val) => {
    document.documentElement.classList.toggle("dark", val);
    localStorage.setItem("is-dark", val ? "true" : "false");
  });
  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("is-dark", isDark.value ? "true" : "false");
  };

  const isFold = ref(false);
  watch(isFold, (val) => {
    document.documentElement.style.setProperty(
      "--app-aside-width",
      val ? "64px" : "200px"
    );
  });
  const toggleFold = () => {
    isFold.value = !isFold.value;
  };

  return {
    isDark,
    isFold,
    toggleFold,
    toggleDarkMode,
  };
});
