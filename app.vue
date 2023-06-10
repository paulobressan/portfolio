<script setup lang="ts">
import json from "~/portfolio.json";
import { Data } from "~/interfaces";

const data: Data = json;

useHead({
  meta: [
    {
      name: "description",
      content: data.about.summary,
    },
    ...(data.about.image
      ? [
          {
            name: "og:image",
            content: data.about.image,
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
        ]
      : []),
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
