<script setup>
import HelloBar from './HelloBar.vue';
</script>

<template>
  <div class="flex flex-col gap-10 p-7">
    <div><HelloBar /></div>
    <div>Current Projects</div>

    <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full">
      <div class="row-span-2 col-span-12 md:col-span-6 bg-red-500">
        Tasks for today
      </div>
      <div class="row-span-1 col-span-12 md:col-span-6 bg-red-500">
        Statistics
      </div>
      <div class="row-span-1 col-span-12 md:col-span-6 bg-red-500">
        Calendar
      </div>
    </div>
  </div>
</template>
