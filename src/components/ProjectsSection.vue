<script setup lang="ts">
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <section id="projects" class="py-10 sm:py-14 px-6">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-10 text-2xl font-bold text-slate-900 dark:text-white">
        Projects
      </h2>
      <div class="grid gap-6 sm:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
