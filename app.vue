<script setup lang="ts">
import data from "~/portfolio.json";
import { Portfolio } from "~/interfaces";

const portfolio: Portfolio = data;

useHead({
  meta: [
    {
      name: "description",
      content: portfolio.summary,
    },
    {
      name: "og:image",
      content: "/image.png",
    },
    {
      name: "og:image:type",
      content: "image/png",
    },
    {
      name: "og:image:width",
      content: "512",
    },
    {
      name: "og:image:height",
      content: "512",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <template #content>
      <NuxtPage />
    </template>
  </NuxtLayout>
</template>
