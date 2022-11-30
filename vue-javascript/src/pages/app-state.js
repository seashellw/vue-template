import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppState = defineStore("app-state", () => {
  const isDark = ref(localStorage.getItem("is-dark") === "true");

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("is-dark", isDark.value ? "true" : "false");
  };

  const isFold = ref(false);
  const toggleFold = () => {
    isFold.value = !isFold.value;
    document.documentElement.style.setProperty(
      "--app-aside-width",
      isFold.value ? "64px" : "200px"
    );
  };

  return {
    isDark,
    isFold,
    toggleFold,
    toggleDarkMode,
  };
});
