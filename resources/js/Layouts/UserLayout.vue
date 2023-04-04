<template>
  <div class="grid grid-cols-12 gap-2 h-screen">
    <div class="col-span-12 xl:col-span- bg-stone-50 rounded-r-[37px] flex gap-2 md:divide-x-2 flex-col lg:flex-row">
      <div class="w-full lg:w-[225px] lg:h-full overflow-hidden">
        <NavBar />
      </div>
      <div class="flex-1 overflow-hidden">
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script setup>
import MainContent from '@/Components/MainContent/MainContent.vue';
import NavBar from '@/Components/Navigation/Navbar.vue';
</script>
