<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
import { profile } from "@/data/profile";
</script>

<template>
  <section id="contact" class="py-10 sm:py-14 px-6">
    <div class="mx-auto max-w-2xl">
      <h2 class="mb-10 text-2xl font-bold text-slate-900 dark:text-white">
        Contact
      </h2>

      <div class="space-y-4">
        <a
          :href="`mailto:${profile.email}`"
          class="flex items-center gap-3 text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
        >
          <EnvelopeIcon class="h-5 w-5 shrink-0" />
          <span>{{ profile.email }}</span>
        </a>

        <a
          :href="`tel:${profile.phone}`"
          class="flex items-center gap-3 text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
        >
          <PhoneIcon class="h-5 w-5 shrink-0" />
          <span>{{ profile.phone }}</span>
        </a>

        <div class="flex gap-4 pt-4">
          <a
            :href="profile.linkedIn"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
          >
            LinkedIn
          </a>
          <a
            :href="profile.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
          >
            GitHub
          </a>
          <a
            :href="profile.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
