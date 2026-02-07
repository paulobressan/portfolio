<script setup lang="ts">
import type { Experience } from "@/types";

defineProps<{
  experience: Experience;
}>();
</script>

<template>
  <article
    class="relative border-l-2 border-slate-200 pl-6 pb-8 last:pb-0 dark:border-slate-700"
  >
    <div
      class="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-950"
    />
    <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
        {{ experience.company }}
      </h3>
      <span
        v-if="experience.partTime"
        class="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300"
      >
        Part-time
      </span>
    </div>
    <p class="text-sm font-medium text-primary-500 dark:text-primary-400">
      {{ experience.role }}
    </p>
    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
      {{ experience.startYear }} &ndash; {{ experience.endYear ?? "Present" }}
    </p>
    <p class="mt-2 text-slate-600 leading-relaxed dark:text-slate-400">
      {{ experience.description }}
    </p>
  </article>
</template>
