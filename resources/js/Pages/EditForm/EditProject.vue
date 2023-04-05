<template>
  <Head :title="$page.props.project.name" />
  <UserLayout>
    <div class="flex flex-col gap-10 p-7">
      <UpdateProject :project="project" />
      <addTask :project="project" />
      <div class="grid grid-cols-12 grid-rows-1 gap-10 h-full">
        <div class="row-span-1 col-span-12 md:col-span-6">
          <div class="space-y-8">
            <h4>Alle gerelateerde taken</h4>
            <div class="flex justify-start" v-if="tasks.length === 0 ">
              <NoTasks @click="setFocus()" />
            </div>
            <div class="flex flex-col items-start gap-5">
              <Task v-for="task in tasks" :key="task.id" :task="task" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>

<script>
  import { Head } from '@inertiajs/vue3';
  import Task from '@/Components/ProjectDetail/Task.vue';
  import UpdateProject from '@/Components/ProjectDetail/UpdateProject.vue';
  import addTask from '@/Components/ProjectDetail/addTask.vue';
  import NothingToShow from '@/Components/NothingToShow.vue';
  import UserLayout from '@/Layouts/UserLayout.vue';
import NoTasks from '@/Components/Widgets/NoTasks.vue';

  export default {
    components: {
    Head,
    Task,
    UpdateProject,
    addTask,
    NothingToShow,
    UserLayout,
    NoTasks
},
    props: {
      project: {
        type: Object,
      },
      tasks: {
        type: Array,
      },
    },
    methods: {
      setFocus() {
        document.getElementById('input_name').focus();
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
