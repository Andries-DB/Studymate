<template>
  <p class="text-red-500 text-sm" :id="id">
    <slot />
  </p>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
  };
</script>
