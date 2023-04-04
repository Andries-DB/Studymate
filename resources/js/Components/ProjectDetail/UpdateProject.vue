<template>
  <div class="space-y-5">
    <h4>Update de naam van je project</h4>
    <div class="w-full lg:w-1/4">
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
        <PrimaryButton class="mt-3">
          Update
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
