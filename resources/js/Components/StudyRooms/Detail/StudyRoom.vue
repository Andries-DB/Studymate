<script setup>
  const data = defineProps({
    studyroom: {
      type: Object,
    },
  });
</script>

<template>
  <div
    class="bg rounded-xl text-white p-4 flex justify-between flex-row gap-7 bg-indigo-500"
    :style="{'background-image':'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(storage/' + studyroom.image + ')' }"
    >
    <a class="p-2" href="">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-3xl">{{ studyroom.name }}</h3>
      </div>
      <p>{{ studyroom.description }}</p>
    </a>
  </div>

</template>

<style>
  .bg {
    background-size: cover;
    background-position: center;
  }
</style>
