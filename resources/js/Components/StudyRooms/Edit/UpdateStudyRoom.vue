<template>
  <div class="space-y-5 ">
    <h4>Update de informatie van je studeerkamer</h4>
    <div class="w-full lg:w-1/3" >
      <form :action="route('editStudyRoom' , studyroom.id)" method="post" enctype="multipart/form-data" class="flex flex-col">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="studyroom.id">
        <TextInput
          class="mb-3"
          id="name"
          type="text"
          name="name"
          required
          autocomplete="Name"
          placeholder="Naam van de studeerkamer"
          :value="studyroom.name"
        />
        <TextInput
          id="description"
          class="mb-3"
          type="text"
          name="description"
          required
          autocomplete="Description"
          placeholder="Beschrijving van de studeerkamer"
          :value="studyroom.description"
        />
        <input type="file" name="image" id="image" class="mb-3">
        <PrimaryButton class="mt-3">
          Update
        </PrimaryButton>
      </form>
    </div>
  </div>
</template>

<script>
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import TextInput from '@/Components/TextInput.vue';

  export default {
    components: {
      PrimaryButton,
      TextInput
    },
    props: {
      studyroom: {
        type: Object
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
