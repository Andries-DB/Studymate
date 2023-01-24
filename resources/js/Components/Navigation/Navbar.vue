<script setup>
  import NavBarMenu from './NavBarMenu.vue';
  import {ref} from 'vue';

  const MOBILE_BREAKPOINT = 1024; //tailwind lg
  const width = ref(document.body.offsetWidth);
  const menuIsActive = ref(width.value > MOBILE_BREAKPOINT);

  const toggleMenu = () => {
    menuIsActive.value = !menuIsActive.value;
  }

  window.addEventListener('resize', () => {
    width.value = document.body.offsetWidth;
    menuIsActive.value = width.value > MOBILE_BREAKPOINT;
  });
</script>

<template>
  <div class="sidenav flex justify-center items-center text-3xl mt-5">
    Studymate
  </div>

  <div class="col-span-12 hidden lg:block pt-5">
    <div class="relative w-full h-24 flex flex-col items-center gap-4">
      <img src="assets/Sara.jpg" alt="Sara" class="w-24 h-24 rounded-full">
    </div>

    <div class="text-center mt-4">
      <a :href="route('profile.edit')">
        <h1 class="font-bold text-black">{{ $page.props.auth.user.first_name + ' ' + $page.props.auth.user.last_name}} </h1>
        <p class="text-gray-500 ">{{ $page.props.auth.user.email }}</p>
      </a>
    </div>

  </div>
</template>

<style scoped>
  .sidenav {
    font-family: 'Unbound', sans-serif;;
    font-weight: 700;
  }

</style>
