<script setup>
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
  <div class="rounded-xl text-white p-4 flex justify-between flex-col gap-7 bg-indigo-500">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-3xl">{{ project.name }}</h3>
      <div class="relative flex items-center gap-1.5">
        <a  :href="route('projectDetail', project.id)" class="bg-gray-200 text-indigo-500 p-2 rounded-lg ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </a>


        <form method="post" :action="route('deleteProject')" class="bg-gray-200 p-0.30 rounded-lg">
          <input type="hidden" name="_token" :value="csrf">
          <input type="hidden" name="id" :value="project.id" />
          <button type="submit" class="text-white p-2 border-none cursor-pointer text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-indigo-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
        </form>

      </div>
    </div>
    <div class="space-y-2">
      <p class="text-white">
        {{ taskperproject.length }} taken | {{ completedTasksperproject.length }} voltooid
      </p>
      <div class="relative h-2 bg-black bg-opacity-20 rounded-xl">
        <span class="absolute bg-gray-200 h-2 top-0 left-0 rounded-xl"
          :style="`width: ${percentage}%`"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      taskperproject() {
        return this.$page.props.tasks.filter((task) => this.project.id === task.project_id);
      },
      completedTasksperproject() {
        return this.taskperproject.filter((task) => task.completed === 1);
      },
      percentage() {
        return (this.completedTasksperproject.length / this.taskperproject.length) * 100;
      }
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  };

</script>
