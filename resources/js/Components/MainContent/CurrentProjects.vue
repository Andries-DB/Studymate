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

<script>
import Project from './Project.vue';

export default {
  components: {
    Project,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
