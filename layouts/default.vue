<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="vars">
    <div class="navbar__nav">
      <nuxt-link
        to="/"
        class="navbar__nav-link"
        :class="{
          'navbar__nav-link--active': route.path == '/',
        }"
      >
        About
      </nuxt-link>
      <nuxt-link
        to="/portfolio"
        class="navbar__nav-link"
        :class="{
          'navbar__nav-link--active': route.path == '/portfolio',
        }"
      >
        Portfolio
      </nuxt-link>
      <nuxt-link
        to="/resume"
        class="navbar__nav-link"
        :class="{
          'navbar__nav-link--active': route.path == '/resume',
        }"
      >
        Resume
      </nuxt-link>
      <nuxt-link
        to="/contact"
        class="navbar__nav-link"
        :class="{
          'navbar__nav-link--active': route.path == '/contact',
        }"
      >
        Contact
      </nuxt-link>
    </div>

    <div>
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.vars {
  --navbar__nav-link-font-size: 16px;
}

.navbar__nav {
  display: flex;
  justify-content: center;
  padding: 32px 0;
}

.navbar__nav-link {
  margin: 0 16px;
  color: var(--navbar__nav-link-text-color);
  font-size: var(--navbar__nav-link-font-size);
  text-decoration: none;
}

.navbar__nav-link--active {
  color: var(--navbar__nav-link-text-color--active);
  font-weight: 700;
}

@media only screen and (max-width: 768px) {
  .navbar__nav {
    justify-content: space-between;
  }
}
</style>
