<script setup>
  const props = defineProps({
    room: {
      type: Object,
    },
  });
</script>

<template>
  <a :href="route('study' , room.id)">
    <div class="relative bg-white shadow-orange-50 shadow-2xl p-7 rounded-xl flex">
      <div class="absolute top-0 left-0 w-2 h-full rounded-l-xl bg-indigo-500" />
      <div class="flex-1">
        <h6>{{ room.name }}</h6>
        <p class="text-gray-500">
          {{ room.description }}
        </p>
      </div>
    </div>
  </a>

</template>
