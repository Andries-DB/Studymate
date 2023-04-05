
import InviteModal from '@/Components/Modals/InviteModal.vue';

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
            <NoStudyRoomInvites @click="showModal()" />
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
            <NothingToShow class="text-base px-10 py-5" >Er zijn op dit moment geen leden</NothingToShow>
          </div>
          <Users
            v-for="user in $page.props.studyroomUsers"
            class="flex flex-row mb-3"
            :studyroomuser = "user"
            :studyroomuserInfo ="user.user"
          />
        </div>
      </div>
      <div class="h-full w-full">
        <div class="ml-5">
          <UpdateStudyRoom :studyroom="$page.props.studyroom" />
        </div>
      </div>
    </div>
  </UserLayout>

  <InviteModal
    :show="AddUser"
    :close="this.closeModal"
    :users="this.$page.props.users"
    :studyroom="this.$page.props.studyroom"
  />
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
    import NoStudyRoomInvites from '@/Components/Widgets/NoStudyRoomInvites.vue';
    import UpdateStudyRoom from '@/Components/StudyRooms/Edit/UpdateStudyRoom.vue';
    import InviteModal from '@/Components/Modals/InviteModal.vue';

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
    UserLayout,
    NoStudyRoomInvites,
    UpdateStudyRoom,
    InviteModal
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
      closeModal() {
        AddUser.value = false;
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      AddUser
    }),
  }
</script>
