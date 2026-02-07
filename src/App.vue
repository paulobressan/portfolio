<script setup lang="ts">
import { useHead } from "@unhead/vue";
import TheNavbar from "./components/TheNavbar.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ContactSection from "./components/ContactSection.vue";
import TheFooter from "./components/TheFooter.vue";

useHead({
  title: "Paulo Bressan - Software Engineer",
});
</script>

<template>
  <TheNavbar />
  <main class="pt-14">
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
