<template>
  <!-- New Studyroom Form -->
  <div id='studyroomForm' class="w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 z-30 flex justify-center items-center hidden">
    <div class="w-96 h-72 bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <div class="close" @click="hideForm()">+</div>
      <h1 class="mb-5">Maak een nieuwe studeerkamer aan!</h1>
      <form method="POST" :action="route('addStudyRoom')" class="flex flex-col gap-2" enctype="multipart/form-data" >
        <input type="hidden" name="_token" :value="csrf">
        <InputLabel for="name" value="Name" />
        <TextInput
        id="name"
        type="text"
        name="name"
        class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        required
        autofocus
        autocomplete="Name"
        placeholder="Naam van de nieuwe studeerkamer"
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
        placeholder="Beschrijving van de nieuwe studeerkamer"
        />
        <input type="file" name="image" id="image">
        <PrimaryButton class="mt-3">
          Maak een nieuwe studeerkamer aan
        </PrimaryButton>
      </form>
    </div>
  </div>

  <div class="flex justify-between py-3">
    <h3 class="text-3xl">Gedeelde studeerkamers</h3>
    <button v-on:click="showForm()" id="addProject" class="bg-indigo-500 py-2 px-4 text-gray-300 rounded-lg hover:bg-gray-300 hover:text-indigo-500"> + Maak een nieuwe studeerkamer</button>
  </div>
  <div class="flex flex-row gap-3">
    <div v-for="shared in $page.props.sharedStudyRoom">
      <StudyRoom :studyroom="shared.studyroom" />
    </div>
  </div>
</template>

<script>
  import StudyRoom from '@/Components/StudyRooms/Detail/StudyRoom.vue';
  import InputLabel from '@/Components/InputLabel.vue';
  import TextInput from '@/Components/TextInput.vue';
  import PrimaryButton from '@/Components/PrimaryButton.vue';

  export default {
    components: {
      StudyRoom,
      InputLabel,
      TextInput,
      PrimaryButton,
    },
    props: {
      sharedStudyRoom: {
        type: Array,
      },
    },
    methods: {
      showForm() {
      document.getElementById('studyroomForm').classList.remove('hidden');
      },
      // Hide the Add project form
      hideForm() {
        document.getElementById('studyroomForm').classList.add('hidden');
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
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
