<template>
  <div class="space-y-5">
    <h4>{{ $t('ProjectDetail.AddTask.Title') }}</h4>
    <div class="w-full lg:w-1/2 flex flex-col ">
      <form method="post" :action="route('addTasktoProject')" class="flex flex-col gap-2">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="project.id">
        <TextInput
          id="input_name"
          type="text"
          name="name"
          required
          autocomplete="Name"
          :placeholder="$t('ProjectDetail.AddTask.Name')"
        />
        <ErrorHandling id="input_nameError" class="hidden">
          {{ $t('ProjectDetail.AddTask.Errors.Name') }}
        </ErrorHandling>
        <TextInput
          id="description"
          type="text"
          name="description"
          required
          autocomplete="description"
          :placeholder="$t('ProjectDetail.AddTask.Description')"
        />
        <ErrorHandling id="descriptionError" class="hidden">
          {{ $t('ProjectDetail.AddTask.Errors.Description') }}
        </ErrorHandling>
        <PrimaryButton class="mt-3" @click="TaskError()">
          {{ $t('ProjectDetail.AddTask.Button') }}
        </PrimaryButton>
      </form>
    </div>
  </div>


</template>

<script>
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import TextInput from '../TextInput.vue';
  import ErrorHandling from '../Error/ErrorHandling.vue';

  export default {
    components: {
      PrimaryButton,
      TextInput,
      ErrorHandling
    },
    props: {
      project: {
        type: Object
      },
    },
    methods: {
      TaskError() {
        // Reset all errors
        document.querySelectorAll('.error').forEach((error) => {
          error.classList.add('hidden');
        });

        // Check if the name is empty
        if (document.getElementById('input_name').value == '') {
          document.getElementById('input_nameError').classList.remove('hidden');
          event.preventDefault();
        }

        // Check if the description is empty
        if (document.getElementById('description').value == '') {
          document.getElementById('descriptionError').classList.remove('hidden');
          event.preventDefault();
        }
      }
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
