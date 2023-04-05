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
   <p :id="id" class="w-full h-16 bg-white text-black border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3" :class="class">
    <slot />
   </p>
</template>
