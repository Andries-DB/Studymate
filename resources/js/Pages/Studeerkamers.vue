<template>
    <Head title="Studeerkamers" />
    <div class="grid grid-cols-12 gap-2 h-screen">
        <div class="col-span-2 rounded-r-full flex flex-col lg:flex-row md:divide-x-2 ">
            <div class="w-full overflow-hidden bg-stone-100 h-full">
                <NavBar />
            </div>
        </div>
        <div class="col-span-10 xl:block">
            <div class="flex-1 overflow-hidden w-full h-full">
              <div class="flex flex-col gap-10 p-7">
                <div><Overview /></div>

                <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full">
                  <div class="row-span-2 col-span-12 md:col-span-6 ">
                    <PublicStudyRooms />
                  </div>
                  <div class="row-span-1 col-span-12 md:col-span-6" >
                    <MyStudyRooms />
                  </div>
                  <div class="row-span-1 col-span-12 md:col-span-6">
                    <Invites />
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { Head } from '@inertiajs/vue3';
  import NavBar from '../Components/Navigation/Navbar.vue';
  import Overview from '@/Components/StudyRooms/Overview.vue';
  import PublicStudyRooms from '@/Components/StudyRooms/PublicStudyRooms.vue';
  import MyStudyRooms from '@/Components/StudyRooms/MyStudyRooms.vue';
  import Invites from '@/Components/StudyRooms/Invites.vue';

  export default {
    components: {
      Overview,
      PublicStudyRooms,
      MyStudyRooms,
      Invites,
      NavBar,
      Head,
    },
  };
</script>

