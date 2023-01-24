<script setup>
import MainContent from '@/Components/MainContent/MainContent.vue';
import { Head } from '@inertiajs/vue3';
import NavBar from '../Components/Navigation/NavBar.vue';
</script>

<template>
    <Head title="Dashboard" />

    <div class="grid grid-cols-12 gap-2 h-screen">
        <div class="col-span-2 rounded-r-[37px] flex flex-col lg:flex-row md:divide-x-2 ">
            <div class="w-full overflow-hidden bg-stone-50 h-full">
                <NavBar />
            </div>
        </div>
        <div class="col-span-10 xl:block">
            <div class="flex-1 overflow-hidden w-full h-full">
                <MainContent />
            </div>
        </div>
    </div>
</template>
