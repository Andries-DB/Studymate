<script setup>
defineProps({
  type: {
    type: String,
    default: 'submit',
  },
});
</script>

<template>
    <button
      :type="type"
      class="border border-indigo-500 bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white hover:border hover:border-white"
    >
      <slot />
    </button>
</template>

