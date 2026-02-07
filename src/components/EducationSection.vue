<script setup lang="ts">
import { education } from "@/data/education";
</script>

<template>
  <section id="education" class="py-10 sm:py-20 px-6">
    <div class="mx-auto max-w-2xl">
      <h2 class="mb-10 text-2xl font-bold text-slate-900 dark:text-white">
        Education
      </h2>
      <div class="space-y-6">
        <article
          v-for="entry in education"
          :key="entry.program"
          class="border-l-2 border-slate-200 pl-6 dark:border-slate-700"
        >
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
            {{ entry.institution }}
          </h3>
          <p class="text-sm text-primary-500 dark:text-primary-400">
            {{ entry.program }}
          </p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {{ entry.startYear }} &ndash; {{ entry.endYear }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
