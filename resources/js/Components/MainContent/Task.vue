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
      <TertiaryButton type="submit">
        <CheckIcon class="h-5 w-5" />
      </TertiaryButton>
    </form>
  </div>
</template>

<script>
  import { CheckIcon } from '@heroicons/vue/20/solid';
  import TertiaryButton from '../Buttons/TertiaryButton.vue';

  export default {
    components: {
    TertiaryButton,
    CheckIcon
},
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    // Get the CSRF token
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
