<template>
  <Head title="Dashboard" />
  <div class="grid grid-cols-12 gap-2 h-screen">
    <div class="col-span-2 xl:col-span-12 rounded-r-full flex gap-2 md:divide-x-2 flex-col lg:flex-row">
      <div class="lg:w-[250px] w-full lg:h-full overflow-hidden">
        <NavBar />
      </div>
      <div class="flex-1 overflow-hidden">
        <MainContent />
      </div>
    </div>
  </div>
</template>


<script>
  import MainContent from '@/Components/MainContent/MainContent.vue';
  import { Head } from '@inertiajs/vue3';
  import NavBar from '@/Components/Navigation/Navbar.vue';

export default {
    components: {
        MainContent,
        NavBar,
        Head,
    },
};
</script>
