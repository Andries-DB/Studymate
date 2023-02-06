<script setup>
  const props = defineProps({
    task: {
        type: Object
    },
  });
</script>


<template>
  <div class="relative bg-white shadow-orange-50 shadow-2xl p-7 rounded-xl flex">
    <div class="absolute top-0 left-0 w-2 h-full rounded-l-xl bg-indigo-500" />
    <div class="flex-1">
      <h6>{{ task.name }} - <strong>{{ task.project.name }}</strong></h6>
      <p class="text-gray-500">
        {{ task.description }}
      </p>
    </div>

    <form method="post" :action="route('updateTask')">
      <input type="hidden" name="_token" :value="csrf">
      <input type="hidden" name="id" :value="task.id" />
      <button type="submit" class="flex justify-center items-center w-7 h-7 border rounded-full border-indigo-500">
        <mdicon
          name="check"
          v-if="task.completed"
          class="w-7 text-sm text-white bg-black rounded-full"
          />
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    // Get the CSRF token
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
