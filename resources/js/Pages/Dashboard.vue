<template>
  <Head title="Dashboard"/>
  <UserLayout>
    <MainContent />
  </UserLayout>
</template>


<script>
  import { Head } from '@inertiajs/vue3';
  import MainContent from '@/Components/MainContent/MainContent.vue';
  import UserLayout from '@/Layouts/UserLayout.vue';

export default {
    components: {
    MainContent,
    Head,
    UserLayout
  },
};
</script>
