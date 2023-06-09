<script setup lang="ts">
interface Props {
  type?: string;
  value: string;
}

const props = defineProps<Props>();

const icon = computed(() => {
  switch (props.type) {
    case "email":
      return "bi-envelope-fill";
    case "github":
      return "bi-github";
    case "linkedin":
      return "bi-linkedin";
    case "phone":
      return "bi-telephone-fill";
    case "twitter":
      return "bi-twitter";
    default:
      return "bi-globe";
  }
});

const link = computed(() => {
  switch (props.type) {
    case "email":
      return `mailto:${props.value}`;
    case "phone":
      return `tel:${props.value}`;
    default:
      return props.value;
  }
});
</script>

<template>
  <a :href="link" class="link" target="_blank">
    <div class="link__content">
      <div>
        <i class="bi" :class="icon"></i>
      </div>
      <div>{{ value }}</div>
    </div>
    <div>
      <i class="bi bi-arrow-right"></i>
    </div>
  </a>
</template>

<style scoped>
.link {
  background: var(--contact__button-background-color);
  color: var(--contact__button-text-color);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  height: 60px;
  padding: 8px 32px;
  text-decoration: none;
}
.link i {
  font-size: 32px;
  color: var(--contact__button-icon-text-color);
}
.link__content {
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  
  -webkit-line-clamp: 1;
}
.link__content i {
  margin-right: 32px;
}
</style>
