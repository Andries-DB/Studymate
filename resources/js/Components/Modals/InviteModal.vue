<template>
  <Modal :show="show" @close="close">
    <div class=" bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h3 class="mb-5">Nodig een nieuw lid uit</h3>
      <form method="post" :action="route('addUserToStudyRoom')">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="studyroom" :value="studyroom.id">
        <select name="user" id="user" class="relative block w-full text-center appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" @click="getUserInfo()">
          <option value="" selected disabled>-- Selecteer een gebruiker --</option>
          <option v-for="user in users" :value="user.id">{{ user.username }}</option>
        </select>
        <div id="info" class="mt-5">
          <NothingToShow id="info_text">Selecteer een gebruiker om zijn info te krijgen</NothingToShow>
        </div>
        <PrimaryButton class="mt-3">
          Voeg gebruiker toe
        </PrimaryButton>
      </form>
    </div>
  </Modal>
</template>

<script>
  import Modal from '@/Components/Modal.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import NothingToShow from '@/Components/NothingToShow.vue';

  export default {
    components: {
      Modal,
      PrimaryButton,
      NothingToShow,
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
    props: {
      close: {
        type: Function,
        required: true
      },
      show: {
        type: Boolean,
        required: true
      },
      users: {
        type: Array,
        required: true
      },
      studyroom: {
        type: Object,
        required: true
      }
    },
    methods: {
      getUserInfo() {
        // Get ID of selected user
        const id = document.getElementById('user').value;
        // Get the user from the users array
        const user = this.$page.props.users.find(user => user.id == id);
        const divInfo = document.getElementById('info');
        divInfo.classList.remove('hidden');
        const SelectedUserUsername = user.username;
        const SelectedUserName = user.first_name + ' ' + user.last_name;
        const SelectedUserEmail = user.email;
        divInfo.innerHTML = `
          <div class="w-auto mt-2">
            <h3 class="text-2xl font-bold">${SelectedUserUsername}</h3>
            <h3 class="text-2xl border-b-2 border-black">${SelectedUserName}</h3>
            <p class="text-sm mt-2">${SelectedUserEmail}</p>
          </div>
        `;
        document.getElementById('info_text').classList.add('hidden');
      }
    }
  }

</script>
