<template>
  <div class="space-y-7 w-full">
    <div class="flex justify-between items-center">
      <div>
        <h4>Taken te voltooien</h4>
        <p class="text-gray-500">Hieronder staan alle taken die je nog moet voltooien</p>
      </div>
      <TertiaryButton id="addProject" @click="showModal()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </TertiaryButton>
    </div>
    <div class="flex flex-col space-y-4">
      <div class="flex justify-center" v-if="getTasks().length === 0">
        <NoTasks @click="showModal()"/>
      </div>
      <Task
        v-for="(task, index) in getTasks()"
        :key="index"
        :task="task"
      />
    </div>
  </div>

  <TaskModal
    :show="AddTask"
    :close="this.closeModal"
    :projects="this.$page.props.projects"
  />

</template>

<script>
  import Task from './Task.vue';
  import { ref } from 'vue';
  import TextInput from '@/Components/TextInput.vue';
  import TertiaryButton from '@/Components/Buttons/TertiaryButton.vue';
  import NoTasks from '@/Components/Widgets/NoTasks.vue';
  import TaskModal from '@/Components/Modals/TaskModal.vue';

  const AddTask = ref(false);

  export default {
    components: {
    Task,
    TextInput,
    TertiaryButton,
    NoTasks,
    TaskModal
    },
    props: {
      tasks: {
        type: Array,
        required: true,
      },
      projects: {
        type: Array,
        required: true,
      },
    },
    methods: {
      // Get non completed tasks
      getTasks() {
        return this.$page.props.tasks.filter((task) => !task.completed);
      },
      showModal() {
        AddTask.value = true;
      },
      // Hide the Add project form
      closeModal() {
        AddTask.value = false;
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      AddTask,
    }),
  };
</script>

<style scoped>
.close {
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  font-size: 30px;
  transform: rotate(45deg);
}
</style>
