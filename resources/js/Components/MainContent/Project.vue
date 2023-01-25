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
      <a  href="#" class="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
      </a>
    </div>

    <div class="space-y-2">
      <p class="text-white">
        {{ taskperproject.length }} taken
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
  };
</script>
