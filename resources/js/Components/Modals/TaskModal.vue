<template>
  <!-- Make new task modal -->
  <Modal :show="show" @close="close">
    <div class="bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h3 class="mb-5">Maak een nieuwe taak aan!</h3>
      <form method="POST" :action="route('addTask')" class="flex flex-col gap-2" >
        <input type="hidden" name="_token" :value="csrf">
        <select name="project" id="project" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option value="" disabled selected>-- Selecteer een project --</option>
          <option v-for="project in projects" :value="project.id">{{ project.name }}</option>
        </select>
        <TextInput
        id="name"
        type="text"
        name="name"
        required
        autocomplete="Name"
        placeholder="Naam van de nieuwe taak"
        />
        <TextInput
        id="description"
        type="text"
        name="description"
        required
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
  import Modal from '@/Components/Modal.vue';
  import TextInput from '@/Components/TextInput.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';

  export default {
    components: {
      Modal,
      TextInput,
      PrimaryButton,
    },
    data() {
      return {
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      };
    },
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      close: {
        type: Function,
        required: true,
      },
      projects: {
        type: Array,
        required: true,
      },
    },
  };
</script>
