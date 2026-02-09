<script setup lang="ts">
import { computed } from "vue";
import { skills } from "@/data/skills";

const grouped = computed(() => {
  const categories = [
    { key: "languages" as const, label: "Languages" },
    { key: "infrastructure" as const, label: "Infrastructure" },
    { key: "soft" as const, label: "Soft Skills" },
  ];
  return categories.map((cat) => ({
    ...cat,
    items: skills.filter((s) => s.category === cat.key),
  }));
});
</script>

<template>
  <section id="skills" class="py-10 sm:py-14 px-6">
    <div class="mx-auto max-w-4xl">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Skills</h2>

      <div v-for="group in grouped" :key="group.key" class="mt-8">
        <h3
          class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
        >
          {{ group.label }}
        </h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="skill in group.items"
            :key="skill.name"
            class="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-mono text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
