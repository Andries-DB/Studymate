<template>
  <Head :title="$page.props.studyroom.name" />
  <UserLayout>
    <div class="flex flex-col gap-10 p-7">
      <div class="flex justify-between items-center space-y-7 xl:w-1/3">
        <h3 class="text-3xl mt-5 ml-5">Uitnodigingen & Leden</h3>
        <TertiaryButton id="addInvitation" @click="showModal()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </TertiaryButton>

      </div>
      <div class="space-y-7 ml-5 mr-5 xl:w-1/3">
        <div>
          <h3 class="mb-2">Uitnodigingen</h3>
          <div class="flex justify-center text-center" v-if="$page.props.studyroomInvitations.length === 0">
            <NothingToShow class="text-base px-10 py-5 cursor-pointer" @click="showModal()">Er is op dit moment niemand uitgenodigd, Klik hier en nodig mensen uit!</NothingToShow>
          </div>
          <Invite
            v-for="invite in $page.props.studyroomInvitations"
            :invite = "invite"
            :invitedUser = "invite.user"
          />
        </div>
        <div>
          <h3 class="mb-2">Leden</h3>
          <div class="flex justify-center text-center" v-if="$page.props.studyroomUsers.length === 0">
            <NothingToShow class="text-base px-10 py-5 cursor-pointer" @click="showModal()">Er zijn op dit moment geen leden, Klik hier en nodig mensen uit!</NothingToShow>
          </div>
          <Users
            v-for="user in $page.props.studyroomUsers"
            class="flex flex-row mb-3"
            :studyroomuser = "user"
            :studyroomuserInfo ="user.user"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 grid-rows-1 gap-10 h-full">
        <div class="row-span-1 col-span-12 md:col-span-6 ml-5">
          Update studyroom
        </div>
      </div>
    </div>
  </UserLayout>

  <Modal :show="AddUser" @close="hideModal()">
    <div class=" bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h3 class="mb-5">Nodig een nieuw lid uit</h3>
      <form method="post" :action="route('addUserToStudyRoom')">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="studyroom" :value="studyroom.id">
        <select name="user" id="user" class="relative block w-full text-center appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" @click="getUserInfo()">
          <option value="" selected disabled>-- Selecteer een gebruiker --</option>
          <option v-for="user in $page.props.users" :value="user.id">{{ user.username }}</option>
        </select>
        <div id="info">
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
    import NavBar from '@/Components/Navigation/Navbar.vue';
    import { Head } from '@inertiajs/vue3';
    import { ref } from 'vue';

    import Invite from '@/Components/StudyRooms/Edit/Invite.vue';
    import Users from '@/Components/StudyRooms/Edit/Users.vue';

    import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
    import TertiaryButton from '@/Components/Buttons/TertiaryButton.vue';
    import Modal from '@/Components/Modal.vue';
    import NothingToShow from '@/Components/NothingToShow.vue';
import UserLayout from '@/Layouts/UserLayout.vue';

    const AddUser = ref(false);

  export default {
    components: {
    NavBar,
    Head,
    Invite,
    Users,
    PrimaryButton,
    TertiaryButton,
    Modal,
    NothingToShow,
    UserLayout
},
    props: {
      studyroom: {
        type: Object
      },
      studyroomInvitations: {
        type: Array
      },
      users: {
        type: Array
      },
      studyroomUsers: {
        type: Array
      }
    },
    methods: {
      // Show the Add project form
      showModal() {
        AddUser.value = true;
      },
      // Hide the Add project form
      hideModal() {
        AddUser.value = false;
      },
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
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      AddUser
    }),
  }
</script>
