<script setup>
import { Head } from '@inertiajs/vue3';
import NavBar from '@/Components/Navigation/NavBar.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

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
            <div class="row-span-2 col-span-12 md:col-span-6 bg-red-500">
              <div class="space-y-7">
                <h3 class="text-3xl mt-5 ml-5">Alle gerelateerde taken</h3>
                  <div class="" v-for="task in tasks">
                    {{ task.name }}
                  </div>
              </div>
            </div>
            <div class="row-span-1 col-span-12 md:col-span-6 " >
              <div class="space-y-7">
                <h3 class="text-3xl mt-5">Update de naam van je project</h3>
                <div class="mt-10 w-1/2">
                  <form :action="route('editProject')" method="post" class="flex flex-col">
                  <input type="hidden" name="_token" :value="csrf">
                  <input type="hidden" name="id" :value="project.id">

                  <input type="text" name="name" id='name' :value="project.name" class="rounded-lg">

                  <PrimaryButton class="mt-3">
                    Update de naam
                  </PrimaryButton>
                </form>
                </div>
              </div>
            </div>
            <div class="row-span-1 col-span-12 md:col-span-6 bg-red-300">
            </div>
          </div>
            <div class="flex justify-center overflow-hidden w-full mt-5">

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
