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

interface Emits {
  (e: "onSeeMore"): void;
}
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="vars card">
    <div class="card__image card-mb">
      <img :src="image" :alt="name" />
    </div>
    <div class="card__content">
      <div>
        <div class="tags card-mb">
          <div v-for="(tag, i) in tags" :key="i">
            <div class="tags__content" :class="`tags__content--${tag.color}`">
              {{ tag.text }}
            </div>
          </div>
        </div>
        <h1 class="card__name card-mb">
          {{ name }}
        </h1>
        <div class="card__summary card-mb">
          {{ summary }}
        </div>
      </div>
      <div class="card__actions">
        <button
          type="button"
          class="card__actions-button"
          @click="emit('onSeeMore')"
        >
          See More
        </button>
        <a
          v-if="link"
          :href="link"
          target="_blank"
          class="card__actions-link"
          title="Open link"
        >
          <i class="bi bi-box-arrow-up-right"></i>
          View now
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vars {
  --card__margin-bottom: 16px;
  --card__name-font-size: 24px;
  --card__summary-line-clamp: 2;
}

@media only screen and (max-width: 768px) {
  .vars {
    --card__margin-bottom: 16px;
    --card__name-font-size: 20px;
    --card__summary-line-clamp: 4;
  }
}

.card-mb {
  margin-bottom: var(--card__margin-bottom);
}

.card {
  display: flex;
}

.card__image {
  display: flex;
  align-items: center;
  width: 360px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 16px;
  width: 100%;
}
.card__name {
  font-size: var(--card__name-font-size);
  font-weight: 700;
}
.card__summary {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--card__summary-line-clamp);
  line-height: 18px;
}

.card__actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.card__actions-link {
  padding: 12px 24px;
  background: var(--portfolio__view-button-background-color);
  color: var(--portfolio__view-button-text-color);
  text-decoration: none;
  font-weight: 700;
  border-radius: 24px;
  margin-left: 16px;
  font-size: 16px;
}

.card__actions-button {
  padding: 12px 24px;
  background: var(--portfolio__more-button-background-color);
  color: var(--portfolio__more-button-text-color);
  font-weight: 700;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  font-size: 16px;
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
    width: 100%;
  }

  .card__link {
    position: unset;
    float: right;
  }
}
</style>
