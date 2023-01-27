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
    <h3 class="text-3xl">Aankomende taken</h3>

    <div class="flex flex-col space-y-4">
      <Task
        v-for="(task, index) in $page.props.tasks"
        :key="index"
        :task="task"
      />
    </div>
  </div>
</template>
