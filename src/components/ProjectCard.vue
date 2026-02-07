<script setup lang="ts">
import { ref } from "vue";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import type { Project } from "@/types";

defineProps<{
  project: Project;
}>();

const isExpanded = ref(false);
</script>

<template>
  <article class="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
    <div class="flex items-start justify-between gap-3">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
        {{ project.name }}
      </h3>
      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0 text-slate-400 transition-colors hover:text-primary-500"
        :aria-label="`Visit ${project.name}`"
      >
        <ArrowTopRightOnSquareIcon class="h-5 w-5" />
      </a>
    </div>

    <div class="mt-3">
      <p
        class="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
        :class="{ 'line-clamp-3': !isExpanded }"
      >
        {{ project.description }}
      </p>
      <button
        type="button"
        class="mt-1 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? "Read Less" : "Read More" }}
      </button>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:bg-slate-800 dark:text-slate-300"
      >
        {{ tech }}
      </span>
    </div>
  </article>
</template>
