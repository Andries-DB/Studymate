<script setup>
  import Task from './Task.vue';
  import InputLabel from '@/Components/InputLabel.vue';
  import TextInput from '@/Components/TextInput.vue';
  import PrimaryButton from '@/Components/PrimaryButton.vue';

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

  <!-- New Task Form -->
  <div id='taskform' class="w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 z-30 flex justify-center items-center hidden">
    <div class="w-96 h-72 bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <div class="close" @click="hideForm()">+</div>
      <h1 class="mb-5">Maak een nieuwe taak aan!</h1>
      <form method="POST" :action="route('addTask')" class="flex flex-col gap-2" >
        <input type="hidden" name="_token" :value="csrf">
        <InputLabel for="project" value="Project"/>
        <select name="project" id="project" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option value="" disabled selected>Selecteer een project</option>
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
  </div>

  <div class="space-y-7 w-full">
    <div class="flex justify-between">
      <h3 class="text-3xl">Taken te voltooien</h3>
      <button v-on:click="showForm()" id="addProject" class="bg-gray-200 text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>

    <div class="flex flex-col space-y-4">
      <Task
        v-for="(task, index) in getTasks()"
        :key="index"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      // Get non completed tasks
      getTasks() {
        return this.$page.props.tasks.filter((task) => !task.completed);
      },
      showForm() {
      document.getElementById('taskform').classList.remove('hidden');
      },
      // Hide the Add project form
      hideForm() {
        document.getElementById('taskform').classList.add('hidden');
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  };
</script>

<style>
.close {
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  font-size: 30px;
  transform: rotate(45deg);
}
</style>
