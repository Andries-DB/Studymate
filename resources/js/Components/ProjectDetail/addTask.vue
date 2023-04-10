<template>
  <div class="space-y-5">
    <h4>Voeg een taak aan het project toe</h4>
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
          placeholder="Naam van de taak"
        />
        <ErrorHandling id="input_nameError"/>
        <TextInput
          id="description"
          type="text"
          name="description"
          required
          autocomplete="description"
          placeholder="Beschrijving van de taak"
        />
        <ErrorHandling id="descriptionError"/>
        <PrimaryButton class="mt-3" @click="TaskError()">
          Voeg taak toe
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
          error.innerHTML = '';
        });

        // Check if the name is empty
        if (document.getElementById('input_name').value == '') {
          document.getElementById('input_nameError').classList.remove('hidden');
          document.getElementById('input_nameError').innerHTML = 'De naam van de taak mag niet leeg zijn.';

          event.preventDefault();
        }

        // Check if the description is empty
        if (document.getElementById('description').value == '') {
          document.getElementById('descriptionError').classList.remove('hidden');
          document.getElementById('descriptionError').innerHTML = 'De beschrijving van de taak mag niet leeg zijn.';

          event.preventDefault();
        }
      }
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
