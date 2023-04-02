<script setup>
  const props = defineProps({
    tasks: {
        type: Array
    },
    projects: {
        type: Array
    },
  });

</script>

<template>
  <div class="space-y-7 w-full">
    <div class="flex justify-between">
      <h3 class="text-3xl">Taken te voltooien</h3>
      <TertiaryButton id="addProject" @click="showModal()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </TertiaryButton>

    </div>

    <div class="flex flex-col space-y-4">
      <Task
        v-for="(task, index) in getTasks()"
        :key="index"
        :task="task"
      />
    </div>
  </div>

  <Modal :show="AddTask" @close="closeModal">
    <div class="bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h1 class="mb-5">Maak een nieuwe taak aan!</h1>
      <form method="POST" :action="route('addTask')" class="flex flex-col gap-2" >
        <input type="hidden" name="_token" :value="csrf">
        <InputLabel for="project" value="Project"/>
        <select name="project" id="project" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option value="" disabled selected>-- Selecteer een project --</option>
          <option v-for="project in $page.props.projects" :value="project.id">{{ project.name }}</option>
        </select>
        <InputLabel for="name" value="Name" />
        <TextInput
        id="name"
        type="text"
        name="name"
        class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        required
        autofocus
        autocomplete="Name"
        placeholder="Naam van de nieuwe taak"
        />
        <InputLabel for="description" value="Description" />
        <TextInput
        id="description"
        type="text"
        name="description"
        class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        required
        autofocus
        autocomplete="Description"
        placeholder="Beschrijving van de nieuwe taak"
        />
        <PrimaryButton class="mt-3">
          Maak een nieuwe taak aan
        </PrimaryButton>
      </form>
    </div>
  </Modal>
</template>

<script>
  import Task from './Task.vue';
  import { ref } from 'vue';
  import Modal from '@/Components/Modal.vue';
  import InputLabel from '@/Components/InputLabel.vue';
  import TextInput from '@/Components/TextInput.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import TertiaryButton from '../Buttons/TertiaryButton.vue';

  const AddTask = ref(false);

  export default {
    components: {
      Task,
      InputLabel,
      TextInput,
      PrimaryButton,
      TertiaryButton,
      Modal,
    },
    props: {
      tasks: {
        type: Array,
        required: true,
      },
      projects: {
        type: Array,
        required: true,
      },
    },
    methods: {
      // Get non completed tasks
      getTasks() {
        return this.$page.props.tasks.filter((task) => !task.completed);
      },
      showModal() {
        AddTask.value = true;
      },
      // Hide the Add project form
      closeModal() {
        AddTask.value = false;
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      AddTask,
    }),
  };
</script>

<style scoped>
.close {
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  font-size: 30px;
  transform: rotate(45deg);
}
</style>
