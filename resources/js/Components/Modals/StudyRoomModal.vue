<template>
  <Modal :show="show" @close="close">
    <div class="bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h3 class="mb-5">Maak een nieuwe studeerkamer aan!</h3>
      <form method="POST" :action="route('addStudyRoom')" class="flex flex-col gap-2" enctype="multipart/form-data" >
        <input type="hidden" name="_token" :value="csrf">
        <TextInput
        id="name"
        type="text"
        name="name"
        class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        autocomplete="Name"
        placeholder="Naam van de nieuwe studeerkamer"
        />
        <ErrorHandling id="nameError" />
        <TextInput
        id="description"
        type="text"
        name="description"
        class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        required
        autocomplete="Description"
        placeholder="Beschrijving van de nieuwe studeerkamer"
        />
        <ErrorHandling id="descriptionError" />

        <input type="file" name="image" id="image">
        <PrimaryButton class="mt-3" @click="StudyRoomerror()">
          Maak een nieuwe studeerkamer aan
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
    TextInput,
    PrimaryButton,
    Modal,
    ErrorHandling
},
    props: {
      close: {
        type: Function,
        required: true
      },
      show: {
        type: Boolean,
        required: true
      }

    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
    methods: {
      StudyRoomerror() {
        // First, remove all errors
        document.getElementById('descriptionError').classList.add('hidden');
        document.getElementById('nameError').classList.add('hidden');

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
    },
  };
</script>
