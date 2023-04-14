<template>
  <div class="space-y-5 ">
    <div class="w-full lg:w-11/12 pr-10 md:pr-0" >
      <h4 class="mb-3">{{ $t('StudyRoomDetail.UpdateStudyRoom.Title') }}</h4>
      <form :action="route('editStudyRoom' , studyroom.id)" method="post" enctype="multipart/form-data" class="flex flex-col">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="studyroom.id">
        <TextInput
          id="name"
          type="text"
          name="name"
          class="mb-3"
          autocomplete="Name"
          :placeholder="$t('StudyRoomDetail.UpdateStudyRoom.Name')"
          :value="studyroom.name"
        />
        <ErrorHandling id="nameError" class="mb-3 hidden">
          {{ $t('StudyRoomDetail.UpdateStudyRoom.Errors.Name') }}
        </ErrorHandling>
        <TextInput
          id="description"
          type="text"
          class="mb-3"
          name="description"
          autocomplete="Description"
          :placeholder="$t('StudyRoomDetail.UpdateStudyRoom.Description')"
          :value="studyroom.description"
        />
        <ErrorHandling id="descriptionError" class="mb-3 hidden">
          {{$t('StudyRoomDetail.UpdateStudyRoom.Errors.Description')}}
        </ErrorHandling>
        <input type="file" name="image" id="image" class="mb-3">
        <PrimaryButton class="mt-3" @click="UpdateError()">
          {{ $t('StudyRoomDetail.UpdateStudyRoom.Button') }}
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
          error.classList.add('hidden')
        });

        // Check if the name is empty
        if (document.getElementById('name').value == '') {
          document.getElementById('nameError').classList.remove('hidden');
          event.preventDefault();
        }

        if (document.getElementById('description').value == '') {
          document.getElementById('descriptionError').classList.remove('hidden');
          event.preventDefault();
        }

      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
