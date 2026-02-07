<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import ThemeToggle from "./ThemeToggle.vue";

const sections = [
  { label: "About", hash: "#about" },
  { label: "Skills", hash: "#skills" },
  { label: "Projects", hash: "#projects" },
  { label: "Experience", hash: "#experience" },
  { label: "Education", hash: "#education" },
  { label: "Contact", hash: "#contact" },
];

const mobileMenuOpen = ref(false);

function scrollTo(hash: string) {
  mobileMenuOpen.value = false;
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", hash);
  }
}

function handleInitialHash() {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") mobileMenuOpen.value = false;
}

onMounted(() => {
  handleInitialHash();
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
      <a
        href="#about"
        class="text-lg font-semibold text-slate-900 dark:text-white"
        @click.prevent="scrollTo('#about')"
      >
        PB
      </a>

      <!-- Desktop links -->
      <div class="hidden items-center gap-6 md:flex">
        <a
          v-for="section in sections"
          :key="section.hash"
          :href="section.hash"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          @click.prevent="scrollTo(section.hash)"
        >
          {{ section.label }}
        </a>
        <ThemeToggle />
      </div>

      <!-- Mobile controls -->
      <div class="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          aria-label="Toggle menu"
          class="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <XMarkIcon v-if="mobileMenuOpen" class="h-5 w-5" />
          <Bars3Icon v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden"
    >
      <a
        v-for="section in sections"
        :key="section.hash"
        :href="section.hash"
        class="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        @click.prevent="scrollTo(section.hash)"
      >
        {{ section.label }}
      </a>
    </div>
  </nav>
</template>
