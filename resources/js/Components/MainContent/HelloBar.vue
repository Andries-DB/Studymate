<template>
  <div class="flex flex-col md:flex-row gap-10 justify-between items-center">
    <div class="space-y-2">
      <h1>{{ $t("Dashboard.HelloBar.Hello") }}, {{ $page.props.auth.user.username }}</h1>
      <p>{{ $t("Dashboard.HelloBar.Today")}} {{ currentDate() }} </p>
    </div>
    <div class="flex justify-between gap-2 items-center">
      <PrimaryButton id="addProject" @click="openModal()">
          + {{ $t('Dashboard.CTA.AddProject') }}
      </PrimaryButton>
    </div>
  </div>

  <ProjectModal
    :show="AddProject"
    @close="closeModal"
  />
</template>

<script>
  import {ref} from 'vue';
  import ProjectModal from '@/Components/Modals/ProjectModal.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';

  const AddProject = ref(false);

  export default {
    components: {
    ProjectModal,
    PrimaryButton,
    },
    methods: {
      // Get the current date
      currentDate() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString(localStorage.getItem('locale') ? localStorage.getItem('locale') : 'nl' , options);
      },
      closeModal() {
        AddProject.value = false;
      },
      openModal() {
        AddProject.value = true;
      },
    },
    // Get the CSRF token
    data: () => ({
      AddProject,
    }),
  }
</script>

