<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
</script>


<template>
  <h3 class="text-3xl mt-5">Update de naam van je project</h3>
  <div class="mt-10 w-1/2">
    <form :action="route('editProject')" method="post" class="flex flex-col">
      <input type="hidden" name="_token" :value="csrf">
      <input type="hidden" name="id" :value="project.id">
      <input type="text" name="name" id='name' :value="project.name" class="rounded-lg">
      <PrimaryButton class="mt-3">
        Update de naam
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
