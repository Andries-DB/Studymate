<template>
  <div class="flex flex-col flex-wrap md:flex-row items-center md:items-stretch gap-6">
    <div class="w-full" v-if="$page.props.projects.length === 0">
      <NoProjects @click="openModal()"/>
    </div>
    <project
      v-for="project in $page.props.projects"
      :key="project.id"
      class="w-full md:w-1/4 rounded-xl p-4"
      :project="project"
    />
  </div>

  <ProjectModal
    :show="AddProject"
    @close="closeModal"
  />
</template>

<script>
import Project from './Project.vue';
import NoProjects from '@/Components/Widgets/NoProjects.vue';
import {ref} from 'vue';
import ProjectModal from '@/Components/Modals/ProjectModal.vue';

const AddProject = ref(false);

export default {
  components: {
    Project,
    NoProjects,
    ProjectModal
},
  data() {
    return {
      AddProject,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    };
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  methods: {
    closeModal() {
      AddProject.value = false;
    },
    openModal() {
      AddProject.value = true;
    },
  },
};
</script>
