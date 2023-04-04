<script setup>
  const props = defineProps({
    id: {
        type: String,
    },
    class: {
        type: String,
    }
});
</script>

<template>
   <p :id="id" class="shadow-lg bg-gray-200 px-5 py-3 lg:px-10 lg:py-5 rounded-full mt-5 mb-5 text-sm lg:text-base" :class="class">
    <slot />
   </p>
</template>
