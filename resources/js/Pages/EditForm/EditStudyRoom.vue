<script setup>
  import NavBar from '@/Components/Navigation/Navbar.vue';
  import { Head } from '@inertiajs/vue3';

  import Invite from '@/Components/StudyRooms/Edit/Invite.vue';
  import Users from '@/Components/StudyRooms/Edit/Users.vue';

  import PrimaryButton from '@/Components/PrimaryButton.vue';

  const props = defineProps({
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
  });
</script>

<template>
  <!-- New invite form -->
  <div id='projectform' class="w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 z-30 flex justify-center items-center hidden">
    <div class="w-96 h-72 bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <div class="close" @click="hideForm()">+</div>
      <h1 class="mb-5">Invite nieuwe leden</h1>
      <form method="post" :action="route('addUserToStudyRoom')">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="studyroom" :value="studyroom.id">
        <select name="user" id="user" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" @click="getUserInfo()">
          <option value="" selected disabled>-- Selecteer een gebruiker --</option>
          <option v-for="user in $page.props.users" :value="user.id">{{ user.username }}</option>
        </select>
        <div id="noinfo" class="w-full bg-gray-200 p-2 text-xs rounded-full mt-5 mb-5">Selecteer een gebruiker om zijn info te krijgen</div>
        <div id="info" class="hidden ">

        </div>
        <PrimaryButton class="mt-3">
          Voeg gebruiker toe
        </PrimaryButton>

      </form>
    </div>
  </div>


  <Head :title="'Bewerken van ' + studyroom.name" />
  <div class="grid grid-cols-12 gap-2 h-screen">
    <div class="col-span-2 rounded-r-[37px] flex flex-col lg:flex-row md:divide-x-2 ">
        <div class="w-full overflow-hidden bg-stone-50 h-full">
            <NavBar />
        </div>
    </div>
    <div class="col-span-10 xl:block">
      <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full">
        <div class="row-span-2 col-span-12 md:col-span-6">
          <div class="flex justify-between items-center space-y-7">
            <h3 class="text-3xl mt-5 ml-5">Uitnodigingen & Leden</h3>
            <button id="addInvitation" v-on:click="showForm()" class="bg-gray-200 text-indigo-500 p-2 mr-5 rounded-lg hover:bg-indigo-500 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
          <div class="space-y-7 mt-5 ml-5 mr-5">
            <div>
              <h3 class="text-2xl mb-3 font-bold">Uitnodigingen</h3>
              <Invite
                v-for="invite in $page.props.studyroomInvitations"
                :invite = "invite"
                :invitedUser = "invite.user"
              />
            </div>
            <div class="">
              <h3 class="text-2xl font-bold mb-3">Leden</h3>
              <Users
                v-for="user in $page.props.studyroomUsers"
                :studyroomuser = "user"
                :studyroomuserInfo ="user.user"

              />
            </div>

          </div>
        </div>
        <div class="row-span-1 col-span-12 md:col-span-6 bg-red-500" >
          Update studyroom
        </div>
        <div class="space-y-7 col-span-12 md:col-span-6 bg-red-500">
          COMING SOON
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      // Show the Add project form
      showForm() {
      document.getElementById('projectform').classList.remove('hidden');
      },
      // Hide the Add project form
      hideForm() {
        document.getElementById('projectform').classList.add('hidden');
      },
      getUserInfo() {
        // Get ID of selected user
        const id = document.getElementById('user').value;
        // Get the user from the users array
        const user = this.$page.props.users.find(user => user.id == id);
        document.getElementById('noinfo').classList.add('hidden');
        const divInfo = document.getElementById('info');
        divInfo.classList.remove('hidden');
        const SelectedUserUsername = user.username;
        const SelectedUserName = user.first_name + ' ' + user.last_name;
        const SelectedUserEmail = user.email;
        divInfo.innerHTML = `
          <div class="w-full mt-2">
            <h3 class="text-2xl font-bold">${SelectedUserUsername}</h3>
            <h3 class="text-2xl border-b-2 border-black">${SelectedUserName}</h3>
            <p class="text-sm mt-2">${SelectedUserEmail}</p>
          </div>
        `;
      }
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
