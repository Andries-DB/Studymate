<template>
  <div class="space-y-5">
    <h4>Update de naam van je project</h4>
    <div class="w-full lg:w-1/4">
      <form :action="route('editProject')" method="post" class="flex flex-col">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="project.id">
        <input type="text" name="name" id='name' :value="project.name" class="rounded-lg">
        <PrimaryButton class="mt-3">
          Update
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
