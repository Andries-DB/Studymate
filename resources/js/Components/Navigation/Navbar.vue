<script setup>
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


  <div class="lg:space-y-10 lg:block fixed grid grid-cols-12 border-r-2 h-full">
    <div class="col-span-9 flex justify-center items-center gap-4">
      <a :href="route('dashboard')" class="flex flex-row items-center justify-center text-indigo-500 mt-12 text-3xl">
        Studym
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
            <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
          </svg>
        </span>
        te
      </a>
    </div>

    <div class="lg:hidden block col-span-3 flex justify-end items-center p-2">
      <button class="bg-stone-300 rounded-lg p-2" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <div class="col-span-12 hidden lg:block pt-5">
      <div class="relative w-full h-24 flex flex-col items-center gap-4">
        <img :src="`storage/${$page.props.auth.user.avatar}`" :alt="$page.props.auth.user.username" class="w-24 h-24 rounded-full">
      </div>

      <div class="text-center">
        <a :href="route('instellingen')">
          <h1 class="font-bold text-black">{{ $page.props.auth.user.first_name + ' ' + $page.props.auth.user.last_name}} </h1>
          <p class="text-gray-500 ">{{ $page.props.auth.user.email }}</p>
        </a>
      </div>
    </div>
    <div class="col-span-12 p-10 mb-20" v-if="menuIsActive">
      <NavBarMenu />
      <div class="">
        <form method="POST" :action="route('logout')">
        <input type="hidden" name="_token" :value="csrf">
        <PrimaryButton type="submit" class="flex lg:justify-center justify-items-start items-center gap-2 mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H3" />
          </svg>
          <span>Logout</span>
        </PrimaryButton>
      </form>
      </div>

    </div>
  </div>
</template>

<script>
  import NavBarMenu from './NavBarMenu.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';

  export default {
    components: {
      NavBarMenu,
      PrimaryButton,
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }

</script>

<style scoped>
  .sidenav {
    font-family: 'Unbound', sans-serif;;
    font-weight: 700;
  }

</style>
