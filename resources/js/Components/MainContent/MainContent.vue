<script setup>
import HelloBar from './HelloBar.vue';
import CurrentProjects from './CurrentProjects.vue';
import Statistics from './Statistics.vue';
import Tasks from './Tasks.vue'
import Friends from './Friends.vue'
</script>

<template>
  <div class="flex flex-col gap-10 p-7">
    <div><HelloBar /></div>
    <div><CurrentProjects /></div>

    <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full">
      <div class="row-span-2 col-span-12 md:col-span-6">
        <Tasks />
      </div>
      <div class="row-span-1 col-span-12 md:col-span-6" >
        <Statistics />
      </div>
      <div class="row-span-1 col-span-12 md:col-span-6">
        <Friends />
      </div>
    </div>
  </div>
</template>
