<template>
  <!-- Make new task modal -->
  <Modal :show="show" @close="close">
    <div class="bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h3 class="mb-5">Maak een nieuwe taak aan!</h3>
      <form method="POST" :action="route('addTask')" class="flex flex-col gap-1" >
        <input type="hidden" name="_token" :value="csrf">
        <select name="project" id="project" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option value="disabled" disabled selected>-- Selecteer een project --</option>
          <option v-for="project in projects" :value="project.id">{{ project.name }}</option>
        </select>
        <!-- Error handling -->
        <ErrorHandling id="projectError" />
        <TextInput
        id="name"
        type="text"
        name="name"
        autocomplete="Name"
        placeholder="Naam van de nieuwe taak"
        />
        <ErrorHandling id="nameError" />
        <TextInput
        id="description"
        type="text"
        name="description"
        autocomplete="Description"
        placeholder="Beschrijving van de nieuwe taak"
        />
        <ErrorHandling id="descriptionError" />
        <PrimaryButton class="mt-3" @click="Taskerror()">
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
import ErrorHandling from '../Error/ErrorHandling.vue';

  export default {
    components: {
    Modal,
    TextInput,
    PrimaryButton,
    ErrorHandling
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
    methods: {
      Taskerror() {
        // First, hide all error messages
        document.getElementById('projectError').classList.add('hidden');
        document.getElementById('nameError').classList.add('hidden');
        document.getElementById('descriptionError').classList.add('hidden');

        // if the user doesn't select a project, show an alert and don't submit the form
        if (document.getElementById('project').value == "disabled") {
          document.getElementById('projectError').innerHTML = "Selecteer een project";
          document.getElementById('projectError').classList.remove('hidden');

          // prevent the form from submitting
          event.preventDefault();
        }
        // if the user doesn't fill in a name, show an alert and don't submit the form
        if (document.getElementById('name').value == "") {
          document.getElementById('nameError').innerHTML = "Vul een naam in";
          document.getElementById('nameError').classList.remove('hidden');

          // prevent the form from submitting
          event.preventDefault();
        }
        // if the user doesn't fill in a description, show an alert and don't submit the form
        if (document.getElementById('description').value == "") {
          document.getElementById('descriptionError').innerHTML = "Vul een beschrijving in";
          document.getElementById('descriptionError').classList.remove('hidden');

          // prevent the form from submitting
          event.preventDefault();
        }
      },

    }
  };
</script>
