<template>
  <Head title="Studeerkamers" />
  <UserLayout>
    <div class="flex flex-col gap-10 p-7">
      <div><Overview /></div>
      <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full">
        <div class="row-span-2 col-span-12 md:col-span-6">
          <PublicStudyRooms />
        </div>
        <div class="row-span-1 col-span-12 md:col-span-6">
          <MyStudyRooms />
        </div>
        <div class="row-span-1 col-span-12 md:col-span-6">
          <Invites />
        </div>
      </div>
    </div>
  </UserLayout>
</template>

<script>
  import { Head } from '@inertiajs/vue3';
  import Overview from '@/Components/StudyRooms/Overview.vue';
  import PublicStudyRooms from '@/Components/StudyRooms/PublicStudyRooms.vue';
  import MyStudyRooms from '@/Components/StudyRooms/MyStudyRooms.vue';
  import Invites from '@/Components/StudyRooms/Invites.vue';
  import UserLayout from '@/Layouts/UserLayout.vue';

  export default {
    components: {
    Overview,
    PublicStudyRooms,
    MyStudyRooms,
    Invites,
    Head,
    UserLayout
},
  };
</script>

