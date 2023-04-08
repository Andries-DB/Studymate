<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="href"
    class="border border-indigo-500 bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500
  hover:text-white hover:border hover:border-white"
  >
    <slot />
  </a>
</template>
