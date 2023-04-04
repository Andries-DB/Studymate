<template>
  <div class="space-y-5">
    <h4>Voeg een taak aan het project toe</h4>
    <div class="w-full lg:w-1/4 flex flex-col ">
      <form method="post" :action="route('addTasktoProject')" class="flex flex-col gap-2">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="project.id">
        <div class=" flex flex-col">
          <label for="name"><strong>Naam van de taak</strong></label>
          <input type="text" name="name" id='name' class="rounded-lg">
        </div>
        <div class="flex flex-col">
        <label for="description"><strong>Beschrijving van de taak</strong></label>
        <input type="text" name="description" id='description' class="rounded-lg">
        </div>
        <PrimaryButton class="mt-3">
          Voeg taak toe
        </PrimaryButton>
      </form>
    </div>
  </div>


</template>

<script>
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';

  export default {
    components: {
      PrimaryButton,
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
