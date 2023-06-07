<script setup lang="ts">
import { Data } from "~/interfaces";
import json from "~/portfolio.json";
import CardPortfolio from "~/components/CardPortfolio.vue";

const data: Data = json;

useHead({
  title: `Portfolio | ${data.about.name} - ${data.about.role}`,
});
</script>

<template>
  <div class="vars">
    <div v-if="data.portfolio.projects?.length" class="projects">
      <div class="projects__label">All projects</div>
      <div v-for="project in data.portfolio.projects" class="projects__card">
        <CardPortfolio
          :name="project.name"
          :summary="project.summary"
          :image="project.image"
          :tags="project.tags"
          :link="project.link"
        />
        <hr />
      </div>
    </div>
    <div v-else>Not have projects</div>
  </div>
</template>

<style scoped>
.vars {
  --projects__margin: 48px 10% 0 10%;
}

@media only screen and (max-width: 768px) {
  .vars {
    --projects__margin: 0 16px 0 16px;
  }
}

.projects {
  margin: var(--projects__margin);
}

.projects__label {
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 700;
  color: var(--portfolio__label);
}

.projects__card {
  margin-bottom: 16px;
}
</style>
