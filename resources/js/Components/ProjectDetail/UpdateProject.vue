<template>
  <div class="space-y-5">
    <h4>Update de naam van je project</h4>
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
          placeholder="Naam van het project"
          :value="project.name"
        />
        <ErrorHandling id="nameError"/>
        <PrimaryButton class="mt-3" @click="UpdateError()">
          Update
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
          error.innerHTML = '';
        });

        // Check if the name is empty
        if (document.getElementById('name').value == '') {
          document.getElementById('nameError').classList.remove('hidden');
          document.getElementById('nameError').innerHTML = 'De naam van het project mag niet leeg zijn.';

          event.preventDefault();
        }
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
