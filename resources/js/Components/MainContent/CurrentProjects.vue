<script setup>
import Project from './Project.vue';

const props = defineProps({
  projects: {
    type: Array,
  },
});
</script>

<template>
  <div class="flex flex-col md:flex-row items-center md:items-stretch gap-6">
    <project
      v-for="project in $page.props.projects"
      :key="project.id"
      class="w-full md:w-1/3 rounded-xl p-4"
      :project="project"
    />
  </div>
</template>
