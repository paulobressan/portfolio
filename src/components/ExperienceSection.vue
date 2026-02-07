<script setup lang="ts">
import { experience } from "@/data/experience";
import ExperienceItem from "./ExperienceItem.vue";
</script>

<template>
  <section id="experience" class="py-10 sm:py-20 px-6">
    <div class="mx-auto max-w-2xl">
      <h2 class="mb-10 text-2xl font-bold text-slate-900 dark:text-white">
        Experience
      </h2>
      <ExperienceItem
        v-for="exp in experience"
        :key="exp.company + exp.startYear"
        :experience="exp"
      />
    </div>
  </section>
</template>
