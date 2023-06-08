<script setup lang="ts">
import { Data, Project } from "~/interfaces";
import json from "~/portfolio.json";
import CardPortfolio from "~/components/CardPortfolio.vue";

const data: Data = json;
const modalOpened: Ref<boolean> = ref(false);
const projectSelected: Ref<Project | undefined> = ref();

useHead({
  title: `Portfolio | ${data.about.name} - ${data.about.role}`,
});

function openSeeMore(project: Project) {
  projectSelected.value = project;
  modalOpened.value = true;
}
</script>

<template>
  <div class="vars">
    <div class="modal" v-if="modalOpened">
      <div class="modal__content">
        <div class="modal__content-header">
          <div class="modal__content-header-close">
            <button
              type="button"
              class="modal__content-header-close-button"
              @click="modalOpened = false"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
        <div class="modal__content-body">
          <div class="tags">
            <div v-for="(tag, i) in projectSelected?.tags" :key="i">
              <div class="tags__content" :class="`tags__content--${tag.color}`">
                {{ tag.text }}
              </div>
            </div>
          </div>
          <h2 class="modal__content-body-title">{{ projectSelected?.name }}</h2>
          <div>
            {{ projectSelected?.summary }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.portfolio.projects?.length" class="projects">
      <div class="projects__label">All projects</div>
      <div v-for="project in data.portfolio.projects" class="projects__card">
        <CardPortfolio
          :name="project.name"
          :summary="project.summary"
          :image="project.image"
          :tags="project.tags"
          :link="project.link"
          @on-see-more="openSeeMore(project)"
        />
        <hr />
      </div>
    </div>
    <div v-else>Not have projects</div>
  </div>
</template>

<style scoped>
.vars {
  --projects__margin: 24px 10% 0 10%;
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

.tags {
  margin-bottom: 16px;
}

.modal {
  z-index: 1055;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  background: var(--modal__background-color);
  color: var(--modal__text-color);
  width: 50%;
  height: 50%;
  border-radius: 24px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.modal__content-header {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
}

.modal__content-header-close {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__content-header-close-button {
  background: unset;
  border: none;
  color: var(--modal__text-color);
  font-size: 26px;
  cursor: pointer;
}

.modal__content-body {
  padding: 16px;
}

.modal__content-body-title {
  font-size: 18px;
  margin: 0 0 16px 0;
}

@media only screen and (max-width: 768px) {
  .modal__content {
    width: 90%;
    height: 90%;
  }
}
</style>
