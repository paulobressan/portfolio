<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="border-t border-slate-200 dark:border-slate-800 py-8 px-6 text-center"
  >
    <p class="text-sm text-slate-500 dark:text-slate-400">
      &copy; {{ currentYear }} Paulo Bressan. All rights reserved.
    </p>
  </footer>
</template>
