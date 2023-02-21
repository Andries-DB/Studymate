<script setup>
  import NavBar from '@/Components/Navigation/Navbar.vue';

  const props = defineProps({
    studyroom: {
        type: Object
    },
    studyroomInvitations: {
        type: Array
    },
  });
</script>

<template>
  <div class="grid grid-cols-12 gap-2 h-screen">
    <div class="col-span-2 rounded-r-[37px] flex flex-col lg:flex-row md:divide-x-2 ">
        <div class="w-full overflow-hidden bg-stone-50 h-full">
            <NavBar />
        </div>
    </div>
    <div class="col-span-10 xl:block">
      <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full">
        <div class="row-span-2 col-span-12 md:col-span-6 bg-red-200">
          <div class="flex justify-between items-center space-y-7">
            <h3 class="text-3xl mt-5 ml-5">Uitnodigingen & Leden</h3>
            <button id="addInvitation" class="bg-gray-200 text-indigo-500 p-2 mr-5 rounded-lg hover:bg-indigo-500 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
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
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
