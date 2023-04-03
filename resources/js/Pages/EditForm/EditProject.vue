<template>
  <Head :title="$page.props.project.name" />
  <div class="grid grid-cols-12 gap-2 h-screen">
    <div class="col-span-12 xl:col-span-12 rounded-r-[37px] flex gap-2 md:divide-x-2 flex-col lg:flex-row">
      <div class="lg:w-[250px] w-full lg:h-full overflow-hidden">
        <NavBar />
      </div>
      <div class="flex-1 overflow-hidden">
        <div class="flex flex-col gap-10 p-7">
          <UpdateProject :project="project" />
          <addTask :project="project" />
          <div class="grid grid-cols-12 grid-rows-1 gap-10 h-full">
            <div class="row-span-1 col-span-12 md:col-span-6">
              <div class="space-y-8">
                <h3 class="text-3xl mt-5 ml-5">Alle gerelateerde taken</h3>
                <div class="flex justify-start" v-if="tasks.length === 0 ">
                  <NothingToShow class="text-base px-10 py-5">Er zijn geen taken! Voeg taken toe om deze te voltooien!</NothingToShow>
                </div>
                <div class="flex flex-col items-start gap-5">
                  <Task v-for="task in tasks" :key="task.id" :task="task" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Head } from '@inertiajs/vue3';
  import NavBar from '@/Components/Navigation/Navbar.vue';

  import Task from '@/Components/ProjectDetail/Task.vue';
  import UpdateProject from '@/Components/ProjectDetail/UpdateProject.vue';
  import addTask from '@/Components/ProjectDetail/addTask.vue';
  import NothingToShow from '@/Components/NothingToShow.vue';

  export default {
    components: {
      Head,
      NavBar,
      Task,
      UpdateProject,
      addTask,
      NothingToShow,
    },
    props: {
      project: {
        type: Object,
      },
      tasks: {
        type: Array,
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
