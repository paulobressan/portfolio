<script setup lang="ts">
import { Data } from "~/interfaces";
import json from "~/portfolio.json";
import ContactLink from "../../components/ContactLink.vue";

const data: Data = json;
useHead({
  title: `Contact | ${data.about.name} - ${data.about.role}`,
});
</script>

<template>
  <div class="vars">
    <div class="contact">
      <div class="contact__info">
        <h1 class="contact__info-title">
          <i class="bi bi-rocket-takeoff-fill"></i>
          Let’s work together!
        </h1>
        <div class="contact__margin-bottom">
          I am excited to be able to help and collaborate with you! Please feel
          free to contact me through the following channels:
        </div>
        <div v-if="data.contact">
          <ContactLink
            v-for="key in Object.keys(data.contact)"
            :type="key"
            :value="data.contact[key]"
            class="contact__info-link"
          />
        </div>
      </div>
      <div class="contact__image">
        <img src="/profile.png" alt="Profile" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.vars {
  --contact__margin: 24px 10% 0 10%;
  --contact__title-font-size: 24px;
  --contact__margin-bottom: 32px;
}

@media only screen and (max-width: 768px) {
  .vars {
    --contact__margin: 0 16px 0 16px;
    --contact__title-font-size: 18px;
    --contact__margin-bottom: 28px;
  }
}

.contact__margin-bottom {
  margin-bottom: var(--contact__margin-bottom);
}

.contact {
  display: flex;
  margin: var(--contact__margin);
}
.contact__info {
  margin-right: 32px;
  width: 70%;
}
.contact__info-title {
  font-size: var(--contact__title-font-size);
  margin: 0 0 16px 0;
}
.contact__info-link {
  margin-bottom: 16px;
}

.contact__image {
  width: 30%;
}
.contact__image img {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .contact {
    flex-direction: column;
  }
  .contact__info {
    width: 100%;
  }
  .contact__image {
    width: 100%;
  }
}
</style>
