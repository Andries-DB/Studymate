<template>
  <!-- Hello Bar -->
  <div class="flex flex-col md:flex-row gap-10 justify-between items-center">
    <div class="space-y-2">
      <h1>Hallo, {{ $page.props.auth.user.username }}</h1>
      <p>Vandaag is het {{ currentDate() }} </p>
    </div>
    <div class="flex justify-between gap-2 items-center">
      <PrimaryButton
        id="addProject"
        @click="openModal()">
          + Voeg een project toe!
      </PrimaryButton>
    </div>
  </div>

  <Modal :show="AddProject" @close="closeModal">
    <div class="bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h3 class="mb-5">Maak een nieuw project aan!</h3>
      <form method="POST" :action="route('addProject')" >
        <input type="hidden" name="_token" :value="csrf">
        <InputLabel for="name" value="Name" />
        <TextInput
        id="name"
        type="text"
        name="name"
        required
        autofocus
        autocomplete="Name"
        placeholder="Naam van het project"
        />
        <PrimaryButton class="mt-3">
          Maak nieuw project aan
        </PrimaryButton>
      </form>
    </div>
  </Modal>
</template>

<script>
  import {ref} from 'vue';
  import InputLabel from '@/Components/InputLabel.vue';
  import TextInput from '@/Components/TextInput.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import Modal from '@/Components/Modal.vue';

  const AddProject = ref(false);

  export default {
    components: {
      Modal,
      InputLabel,
      TextInput,
      PrimaryButton,
    },
    methods: {
      // Get the current date
      currentDate() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString('nl', options);
      },
      closeModal() {
        AddProject.value = false;
      },
      openModal() {
        AddProject.value = true;
        console.log(AddProject.value);
      },
    },
    // Get the CSRF token
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      AddProject,
    }),
  }
</script>

