import { ref, watch } from "vue";

const isDark = ref(false);
let initialized = false;

export function useDarkMode() {
  if (!initialized) {
    const saved = localStorage.getItem("theme");
    if (saved) {
      isDark.value = saved === "dark";
    } else {
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    applyTheme();
    initialized = true;
  }

  watch(isDark, () => {
    applyTheme();
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  });

  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleDark() {
    isDark.value = !isDark.value;
  }

  return { isDark, toggleDark };
}
