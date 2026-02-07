<script setup lang="ts">
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { useDarkMode } from "@/composables/useDarkMode";

const { isDark, toggleDark } = useDarkMode();
</script>

<template>
  <button
    type="button"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
    @click="toggleDark"
  >
    <MoonIcon v-if="isDark" class="h-5 w-5" />
    <SunIcon v-else class="h-5 w-5" />
  </button>
</template>
