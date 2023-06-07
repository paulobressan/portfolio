<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import data from "~/portfolio.json";
import Card from "~/components/Card.vue";
import { Portfolio } from "~/interfaces";

const portfolio: Portfolio = data;

useHead({
  title: `${portfolio.name} - ${portfolio.role}`,
});
</script>

<template>
  <div class="vars">
    <div class="info">
      <h1 class="info__title">
        {{ portfolio.name }}
      </h1>
      <h2 class="info__subtitle">
        {{ portfolio.role }}
      </h2>
      <div class="info__text">
        {{ portfolio.summary }}
      </div>
      <nuxt-link to="/contact" class="info__contact"> Contact me </nuxt-link>
    </div>
    <div v-if="portfolio.projects?.length" class="projects">
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
        <swiper-slide v-for="(project, i) in portfolio.projects" :key="i">
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
  --info__title-font-size: 24px;
  --info__subtitle-font-size: 56px;
  --info__margin: 0 25% 48px 25%;
  --info__title-margin: 48px 0 0 0;
  --info__subtitle-margin: 0 0 48px 0;
  --projects__margin: 0 0 16px 16px;
}

@media only screen and (max-width: 768px) {
  .vars {
    --info__title-font-size: 20px;
    --info__subtitle-font-size: 32px;
    --info__margin: 0 16px 48px 16px;
    --info__title-margin: 16px 0 0 0;
    --info__subtitle-margin: 0 0 16px 0;
    --projects__margin: 0 0 16px 16px;
  }
}

.info {
  text-align: center;
  margin: var(--info__margin);
}

.info__title {
  font-size: var(--info__title-font-size);
  color: var(--info__title-color);
  font-weight: 700;
  margin: var(--info__title-margin);
}

.info__subtitle {
  font-size: var(--info__subtitle-font-size);
  color: var(--info__subtitle-color);
  font-weight: 400;
  margin: var(--info__subtitle-margin);
}

.info__text {
  margin: 0 0 48px 0;
}

.info__contact {
  background: var(--info__contact-background);
  color: var(--info__contact-color);
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: 700;
}

.projects {
  margin: var(--projects__margin);
}
</style>
