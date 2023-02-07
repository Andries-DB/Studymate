<script setup>
import { Head } from '@inertiajs/vue3';
import NavBar from '@/Components/Navigation/NavBar.vue';

import Task from '@/Components/ProjectDetail/Task.vue';
import UpdateProject from '@/Components/ProjectDetail/UpdateProject.vue';
import addTask from '@/Components/ProjectDetail/addTask.vue';
const props = defineProps({
    project: {
        type: Object
    },
    tasks: {
        type: Array
    },
  });
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
          <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full">
            <div class="row-span-2 col-span-12 md:col-span-6">
              <div class="space-y-7">
                <h3 class="text-3xl mt-5 ml-5">Alle gerelateerde taken</h3>
                <div class="flex flex-col items-center gap-5">
                  <Task v-for="task in tasks" :key="task.id" :task="task" />
                </div>
              </div>
            </div>
            <div class="row-span-1 col-span-12 md:col-span-6" >
              <div class="space-y-3">
                <UpdateProject :project="project" />
                <hr>
                <addTask :project="project" />
              </div>
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
    props: {
      project: {
        type: Object
      },
      tasks: {
        type: Array
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
