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
        required
        autocomplete="Name"
        placeholder="Naam van de nieuwe studeerkamer"
        />
        <TextInput
        id="description"
        type="text"
        name="description"
        class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        required
        autocomplete="Description"
        placeholder="Beschrijving van de nieuwe studeerkamer"
        />
        <input type="file" name="image" id="image">
        <PrimaryButton class="mt-3">
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

  export default {
    components: {
      TextInput,
      PrimaryButton,
      Modal
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
  };
</script>
