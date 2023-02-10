<script setup>
  const data = defineProps({
    studyroom: {
      type: Object,
    },
  });
</script>

<template>
  <div class="rounded-xl text-white p-4 flex justify-between flex-col gap-7 bg-indigo-500">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-3xl">{{ studyroom.name }}</h3>
      </div>
      <p>{{ studyroom.description }}</p>
    </div>
</template>
