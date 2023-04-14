<template>
  <div class="space-y-5">
    <h4>{{$t('ProjectDetail.UpdateProject.Title')}}</h4>
    <div class="w-full lg:w-1/2">
      <form :action="route('editProject')" method="post" class="flex flex-col">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="project.id">
        <TextInput
          id="name"
          type="text"
          name="name"
          required
          autocomplete="Name"
          :placeholder="$t('ProjectDetail.UpdateProject.Name')"
          :value="project.name"
        />
        <ErrorHandling id="nameError" class="hidden">
          {{ $t('ProjectDetail.UpdateProject.Errors.Name') }}
        </ErrorHandling>
        <PrimaryButton class="mt-3" @click="UpdateError()">
          {{$t('ProjectDetail.UpdateProject.Button')}}
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
      UpdateError() {
        // Reset all errors
        document.querySelectorAll('.error').forEach((error) => {
          error.classList.add('hidden');
        });

        // Check if the name is empty
        if (document.getElementById('name').value == '') {
          document.getElementById('nameError').classList.remove('hidden');
          event.preventDefault();
        }
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
