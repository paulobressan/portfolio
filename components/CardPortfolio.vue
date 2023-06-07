<script setup lang="ts">
import { Tag } from "~/interfaces";

interface Props {
  name: string;
  summary: string;
  image?: string;
  tags?: Tag[];
  link?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="vars card">
    <div class="card__image">
      <img :src="image" :alt="name" />
    </div>
    <div class="card__content">
      <div class="card__tags">
        <div v-for="(tag, i) in tags" :key="i">
          <div
            class="card__tags-content"
            :class="`card__tags-content--${tag.color}`"
          >
            {{ tag.text }}
          </div>
        </div>
      </div>
      <h1 class="card__name">
        {{ name }}
      </h1>
      <div>
        {{ summary }}
      </div>
      <a
        v-if="link"
        :href="link"
        target="_blank"
        class="card__link"
        title="Open link"
      >
        <i class="bi bi-box-arrow-up-right"></i>
        View
      </a>
    </div>
  </div>
</template>

<style scoped>
.vars {
  --card__name-font-size: 24px;
}

@media only screen and (max-width: 768px) {
  .vars {
    --card__name-font-size: 20px;
  }
}

.card {
  display: flex;
}
.card__image {
  display: flex;
  align-items: center;
}
.card__image {
  width: 320px;
  height: auto;
  overflow: hidden;
  border-radius: 18px;
}
.card__image img {
  width: 100%;
  transition: all 0.3s ease-in-out;
}
.card__image img:hover {
  transform: scale(1.2);
}

.card__content {
  position: relative;
  padding: 16px;
  width: 100%;
}
.card__name {
  font-size: var(--card__name-font-size);
  font-weight: 700;
  margin: 0;
  margin-bottom: 16px;
}

.card__tags {
  margin-bottom: 16px;
}

.card__link {
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 8px 16px;
  background: var(--portfolio__view-button-background-color);
  color: var(--portfolio__view-button-color-color);
  text-decoration: none;
  font-weight: 700;
  border-radius: 24px;
}

.card__link i {
  margin-right: 8px;
}

@media only screen and (max-width: 768px) {
  .card {
    flex-direction: column;
  }

  .card__content {
    padding: 0;
    width: unset;
  }

  .card__image {
    margin-bottom: 16px;
    width: 100%;
  }

  .card__link {
    position: unset;
    float: right;
  }
}
</style>
