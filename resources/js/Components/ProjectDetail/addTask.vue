<script setup>
  import PrimaryButton from '@/Components/PrimaryButton.vue';
</script>

<template>
  <h3 class="text-3xl">Voeg een taak aan het project toe!</h3>
  <div class="w-1/2 flex flex-col ">
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
        Maak taak aan
      </PrimaryButton>
    </form>
  </div>

</template>

<script>
  export default {
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
