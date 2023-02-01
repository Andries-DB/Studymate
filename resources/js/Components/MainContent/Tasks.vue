<script setup>
  import Task from './Task.vue';

  const props = defineProps({
    tasks: {
        type: Array
    },
  });

</script>

<template>
  <div class="space-y-7 w-full">
    <div class="flex justify-between">
      <h3 class="text-3xl">Taken te voltooien</h3>
      <a class="bg-gray-200 text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </a>
    </div>

    <div class="flex flex-col space-y-4">
      <Task
        v-for="(task, index) in $page.props.tasks"
        :key="index"
        :task="task"
      />
    </div>
  </div>
</template>
