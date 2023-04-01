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
  <div class="sidenav flex justify-center items-center text-3xl mt-5 text-indigo-500">
    <a :href="route('dashboard')" class="flex flex-row">
      Studym
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
          <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
        </svg>
      </span>
      te
    </a>
  </div>

  <div class="col-span-12 hidden lg:block pt-5 space-y-5">
    <div class="relative w-full h-24 flex flex-col items-center gap-4">
      <img src="assets/Sara.jpg" alt="Sara" class="w-24 h-24 rounded-full">
    </div>

    <div class="text-center mt-4">
      <a :href="route('profile.edit')">
        <h1 class="font-bold text-black">{{ $page.props.auth.user.first_name + ' ' + $page.props.auth.user.last_name}} </h1>
        <p class="text-gray-500 ">{{ $page.props.auth.user.email }}</p>
      </a>
    </div>

    <div class="col-span-12 p-10 space-y-8" v-if="menuIsActive">
      <NavBarMenu />
    </div>

    <div class="absolute bottom-24 left-24">
      <!-- Logout form -->
      <form method="POST" :action="route('logout')">
        <input type="hidden" name="_token" :value="csrf">
        <button type="submit" class="flex flex-row items-center gap-2 bg-indigo-500 py-2 px-4 text-gray-300 rounded-lg
      hover:bg-gray-300 hover:text-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H3" />
          </svg>
          <span>Logout</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import NavBarMenu from './NavBarMenu.vue';

  export default {
    components: {
      NavBarMenu,
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
