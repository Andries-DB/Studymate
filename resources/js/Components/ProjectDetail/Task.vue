<template>
  <div class=" flex items-center justify-between  gap-5 w-11/12 h-auto bg-gray-200 px-5 py-3 rounded-lg">
    <div>
      <div name="INFO">
        <strong>{{task.name}}</strong> - {{task.description}}
      </div>
      <div class="mt-2">
        <strong>
          <span v-if="task.completed === 1">Je hebt deze taak al voltooid</span>
          <span v-else>Je moet deze taak nog voltooien</span>
        </strong>
      </div>
    </div>
    <div class="flex items-center mr-5 gap-2 text-white">
    <div class="bg-gray-200 p-0.30  rounded-lg" title="Onvoltooi taak" v-if="task.completed === 1">
      <form method="post" :action="route('updateTask')" class="bg-gray-200 p-0.30 rounded-lg">
      <input type="hidden" name="_token" :value="csrf">
      <input type="hidden" name="id" :value="task.id" />
      <TertiaryButton type="submit">
        <DocumentMinusIcon class="w-5 h-5" />
      </TertiaryButton>
      </form>
      </div>
      <form method="post" :action="route('deleteTask')" class="bg-gray-200 p-0.30 rounded-lg">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="task.id" />
        <TertiaryButton type="submit">
          <TrashIcon class="w-5 h-5" />
        </TertiaryButton>
      </form>
    </div>
  </div>

</template>

<script>
  import TertiaryButton from '../Buttons/TertiaryButton.vue';
  import { DocumentMinusIcon, TrashIcon } from '@heroicons/vue/20/solid';

  export default {
    components: {
      TertiaryButton,
      DocumentMinusIcon,
      TrashIcon
    },
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
