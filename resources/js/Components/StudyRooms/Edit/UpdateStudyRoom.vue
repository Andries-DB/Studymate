<template>
  <div class="space-y-5 ">
    <div class="w-full lg:w-11/12 pr-10 md:pr-0" >
      <h4 class="mb-3">Update de informatie van je studeerkamer</h4>
      <form :action="route('editStudyRoom' , studyroom.id)" method="post" enctype="multipart/form-data" class="flex flex-col">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="studyroom.id">
        <TextInput
          id="name"
          type="text"
          name="name"
          autocomplete="Name"
          placeholder="Naam van de studeerkamer"
          :value="studyroom.name"
        />
        <ErrorHandling id="nameError" class="mb-3" />
        <TextInput
          id="description"
          type="text"
          name="description"
          autocomplete="Description"
          placeholder="Beschrijving van de studeerkamer"
          :value="studyroom.description"
        />
        <ErrorHandling id="descriptionError" class="mb-3"/>
        <input type="file" name="image" id="image" class="mb-3">
        <PrimaryButton class="mt-3" @click="UpdateError()">
          Update
        </PrimaryButton>
      </form>
    </div>
  </div>
</template>

<script>
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import ErrorHandling from '@/Components/Error/ErrorHandling.vue';
  import TextInput from '@/Components/TextInput.vue';

  export default {
    components: {
      PrimaryButton,
      TextInput,
      ErrorHandling,
    },
    props: {
      studyroom: {
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
          document.getElementById('nameError').innerHTML = 'De naam van de studeerkamer is verplicht';

          event.preventDefault();
        }

        if (document.getElementById('description').value == '') {
          document.getElementById('descriptionError').classList.remove('hidden');
          document.getElementById('descriptionError').innerHTML = 'De beschrijving van de studeerkamer is verplicht';

          event.preventDefault();
        }

      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
