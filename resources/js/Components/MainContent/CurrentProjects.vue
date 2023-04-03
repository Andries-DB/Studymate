<template>
  <div class="flex flex-col md:flex-row items-center md:items-stretch gap-6" :class="$page.props.projects.length === 0 ? 'justify-center' : ''">
    <div class="flex justify-center items-center" v-if="$page.props.projects.length === 0">
      <NothingToShow id="info_text" class="text-base px-10 py-5">Je hebt nog geen projecten. Voeg er één toe en begin met studeren!</NothingToShow>
    </div>
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
import NothingToShow from '../NothingToShow.vue';

export default {
  components: {
    Project,
    NothingToShow,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
