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
   <p :id="id" class="bg-gray-200 py-3 px-4 text-xs rounded-full mt-5 mb-5" :class="class">
    <slot />
   </p>
</template>
