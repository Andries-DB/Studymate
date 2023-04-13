<template>
  <Modal :show="show" @close="close">
    <div class="bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h3 class="mb-5">{{ $t('Modals.StudyRoomModal.Title') }}</h3>
      <form method="POST" :action="route('addStudyRoom')" class="flex flex-col gap-2" enctype="multipart/form-data" >
        <input type="hidden" name="_token" :value="csrf">
        <TextInput
        id="name"
        type="text"
        name="name"
        autocomplete="Name"
        :placeholder="$t('Modals.StudyRoomModal.Name')"
        />
        <ErrorHandling id="nameError" class="hidden">
          {{ $t('Modals.StudyRoomModal.Errors.Name') }}
        </ErrorHandling>
        <TextInput
        id="description"
        type="text"
        name="description"
        autocomplete="Description"
        :placeholder="$t('Modals.StudyRoomModal.Description')"
        />
        <ErrorHandling id="descriptionError" class="hidden">
          {{ $t('Modals.StudyRoomModal.Errors.Description') }}
        </ErrorHandling>

        <input type="file" name="image" id="image">
        <PrimaryButton class="mt-3" @click="StudyRoomerror()">
          {{ $t('Modals.StudyRoomModal.Title') }}
        </PrimaryButton>
      </form>
    </div>
  </Modal>
</template>

<script>
  import Modal from '@/Components/Modal.vue';
  import TextInput from '@/Components/TextInput.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import ErrorHandling from '../Error/ErrorHandling.vue';
  import { useI18n } from 'vue-i18n';

  export default {
    components: {
    TextInput,
    PrimaryButton,
    Modal,
    ErrorHandling
},
    props: {
      close: {
        type: Function,
        required: true
      },
      show: {
        type: Boolean,
        required: true
      }

    },
    setup() {
      const { t } = useI18n({});
      return { t };
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
    methods: {
      StudyRoomerror() {
        // First, remove all errors
        document.getElementById('descriptionError').classList.add('hidden');
        document.getElementById('nameError').classList.add('hidden');

         // if the user doesn't fill in a name, show an alert and don't submit the form
         if (document.getElementById('name').value == "") {
          document.getElementById('nameError').classList.remove('hidden');
          event.preventDefault();
        }
        // if the user doesn't fill in a description, show an alert and don't submit the form
        if (document.getElementById('description').value == "") {
          document.getElementById('descriptionError').classList.remove('hidden');
          event.preventDefault();
        }
      },
    },
  };
</script>
