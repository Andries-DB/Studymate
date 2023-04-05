<template>
  <div class="rounded-xl text-white p-4 flex justify-between flex-col gap-7 bg-indigo-500">
    <div class="flex justify-between items-center">
      <h3>{{ project.name }}</h3>
      <div class="relative flex items-center gap-1.5">
        <SecondaryAnchor :href="route('projectDetail', project.id)">
          <PencilIcon class="w-5 h-5" />
        </SecondaryAnchor>
        <form method="post" :action="route('deleteProject')" class="bg-gray-200 p-0.30 rounded-lg">
          <input type="hidden" name="_token" :value="csrf">
          <input type="hidden" name="id" :value="project.id" />
          <TertiaryButton type="submit">
            <TrashIcon class="w-5 h-5" />
          </TertiaryButton>
        </form>
      </div>
    </div>
    <div class="space-y-2">
      <p class="text-white">
        {{ taskperproject.length }} {{ taskperproject.length === 1 ? "taak" : "taken" }} | {{ completedTasksperproject.length }} voltooid
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
  import SecondaryAnchor from "@/Components/Anchors/SecondaryAnchor.vue";
  import TertiaryButton from "@/Components/Buttons/TertiaryButton.vue";
  import { TrashIcon, PencilIcon } from "@heroicons/vue/20/solid";

  export default {
    components: {
    SecondaryAnchor,
    TertiaryButton,
    TrashIcon,
    PencilIcon
},
    props: {
      project: {
        type: Object
      },
      tasks: {
        type: Array
      },
    },
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
