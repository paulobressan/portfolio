<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import json from "~/portfolio.json";
import Card from "~/components/Card.vue";
import { Data } from "~/interfaces";

const data: Data = json;

useHead({
  title: `${data.about.name} - ${data.about.role}`,
});
</script>

<template>
  <div class="vars">
    <div class="info">
      <h1 class="about__title">
        {{ data.about.name }}
      </h1>
      <h2 class="about__subtitle">
        {{ data.about.role }}
      </h2>
      <div class="info__text">
        {{ data.about.summary }}
      </div>
      <nuxt-link to="/contact" class="about__contact"> Contact me </nuxt-link>
    </div>
    <div class="projects">
      <swiper
        :slides-per-view="1.25"
        space-between="16"
        :autoplay="true"
        :center-insufficient-slides="true"
        :breakpoints="{
          '768': {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          '992': {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          '1200': {
            slidesPerView: 4.5,
            spaceBetween: 16,
          },
          '1400': {
            slidesPerView: 5.5,
            spaceBetween: 16,
          },
        }"
      >
        <swiper-slide v-for="(project, i) in data.portfolio.projects" :key="i">
          <Card
            :name="project.name"
            :image="project.image"
            :tags="project.tags"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.vars {
  --about__title-font-size: 24px;
  --about__subtitle-font-size: 56px;
  --info__margin: 0 20% 48px 20%;
  --about__title-margin: 48px 0 0 0;
  --about__subtitle-margin: 0 0 48px 0;
  --projects__margin: 0 0 16px 16px;
}

@media only screen and (max-width: 768px) {
  .vars {
    --about__title-font-size: 20px;
    --about__subtitle-font-size: 32px;
    --info__margin: 0 16px 48px 16px;
    --about__title-margin: 16px 0 0 0;
    --about__subtitle-margin: 0 0 16px 0;
    --projects__margin: 0 0 16px 16px;
  }
}

.info {
  text-align: center;
  margin: var(--info__margin);
}

.about__title {
  font-size: var(--about__title-font-size);
  color: var(--about__title-color);
  font-weight: 700;
  margin: var(--about__title-margin);
}

.about__subtitle {
  font-size: var(--about__subtitle-font-size);
  color: var(--about__subtitle-color);
  font-weight: 400;
  margin: var(--about__subtitle-margin);
}

.info__text {
  margin: 0 0 48px 0;
}

.about__contact {
  background: var(--about__contact-background);
  color: var(--about__contact-color);
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: 700;
}

.projects {
  margin: var(--projects__margin);
}
</style>
