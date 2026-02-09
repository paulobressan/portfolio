<script setup lang="ts">
import { profile } from "@/data/profile";
</script>

<template>
  <section id="about" class="py-10 sm:py-14 px-6">
    <div class="mx-auto max-w-2xl text-left sm:text-center">
      <h1
        class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
      >
        {{ profile.name }}
      </h1>
      <p
        class="mt-2 text-lg font-medium text-primary-500 dark:text-primary-400"
      >
        {{ profile.title }}
      </p>
      <p
        class="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
      >
        {{ profile.about }}
      </p>
    </div>
  </section>
</template>
