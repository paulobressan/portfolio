<script setup lang="ts">
import { Tag } from "~/interfaces";

interface Props {
  name: string;
  image?: string;
  tags?: Tag[];
}
defineProps<Props>();
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="image" :alt="name" />
    </div>
    <div>
      <h3 class="card__name">
        {{ name }}
      </h3>
      <div class="tags">
        <div v-for="(tag, i) in tags" :key="i">
          <div class="tags__content" :class="`tags__content--${tag.color}`">
            {{ tag.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 320px;
}

.card__image {
  display: flex;
  align-items: center;
  max-width: 320px;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 24px;
}
.card__image img {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.card__image img:hover {
  transform: scale(1.2);
}

.card__name {
  font-size: 16px;
  font-weight: 700;
}
</style>
