<template>
  <Head :title="$page.props.studyroom.name" />
  <UserLayout>
    <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full ml-10 mt-8">
      <div class="row-span-2 col-span-12 md:col-span-6 spaxe-y-7">
        <UpdateStudyRoom :studyroom="$page.props.studyroom" />
        <div class="mt-8">
          <h4 >Uitnodigingen</h4>
          <p class="text-gray-500 mb-4">Hier zie je alle uitnodigingen die je hebt verstuurd</p>
          <div class="flex justify-center text-center w-11/12" v-if="$page.props.studyroomInvitations.length === 0">
            <NothingToShow class="text-base px-10 py-5" >Er zijn op dit moment geen uitnodigingen</NothingToShow>
          </div>
          <Invite
            v-for="invite in $page.props.studyroomInvitations"
            :invite = "invite"
            :invitedUser = "invite.user"
          />
          <h4 class="mt-2">Leden</h4>
          <p class="text-gray-500 mb-4">Hier zie je alle leden van de studiezaal</p>
          <div class="flex justify-center text-center w-11/12" v-if="$page.props.studyroomUsers.length === 0">
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
      <div class="row-span-1 col-span-12 md:col-span-6 ">
        <div class="flex flex-col gap-5">
          <div class="">
            <h4>Nodig mensen uit</h4>
            <p class="text-gray-500">Selecteer gebruikers en nodig ze uit</p>
          </div>
          <div class="flex flex-col gap-5">
            <UserOverview
            :user="user"
            :studyroom="$page.props.studyroom"
          />
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>

<script>
  import { Head } from '@inertiajs/vue3';
  import Invite from '@/Components/StudyRooms/Edit/Invite.vue';
  import Users from '@/Components/StudyRooms/Edit/Users.vue';
  import TertiaryButton from '@/Components/Buttons/TertiaryButton.vue';
  import NothingToShow from '@/Components/NothingToShow.vue';
  import UserLayout from '@/Layouts/UserLayout.vue';
  import UpdateStudyRoom from '@/Components/StudyRooms/Edit/UpdateStudyRoom.vue';
  import UserOverview from '@/Components/StudyRooms/Edit/UserOverview.vue';

  export default {
    components: {
    Head,
    Invite,
    Users,
    TertiaryButton,
    NothingToShow,
    UserLayout,
    UpdateStudyRoom,
    UserOverview
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
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
