<template>
  <div class="space-y-5">
    <h4>Voeg een taak aan het project toe</h4>
    <div class="w-full lg:w-1/4 flex flex-col ">
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
        <TextInput
          id="description"
          type="text"
          name="description"
          required
          autocomplete="description"
          placeholder="Beschrijving van de taak"
        />
        <PrimaryButton class="mt-3">
          Voeg taak toe
        </PrimaryButton>
      </form>
    </div>
  </div>


</template>

<script>
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '../TextInput.vue';

  export default {
    components: {
    PrimaryButton,
    TextInput
},
    props: {
      project: {
        type: Object
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
