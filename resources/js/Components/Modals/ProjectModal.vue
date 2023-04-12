<template>
  <Modal @close="close" :show="show">
    <div class="bg-white rounded-lg flex flex-col items-center justify-center p-5 relative">
      <h3 class="mb-5">{{ $t('Modals.ProjectModal.Title') }}</h3>
      <form method="POST" :action="route('addProject')" >
        <input type="hidden" name="_token" :value="csrf">
        <TextInput
        id="name"
        type="text"
        name="name"
        required
        autocomplete="Name"
        :placeholder="$t('Modals.ProjectModal.Name')"
        />
        <PrimaryButton class="mt-3">
          {{ $t('Modals.ProjectModal.Title') }}
        </PrimaryButton>
      </form>
    </div>
  </Modal>
</template>

<script>
  import Modal from '@/Components/Modal.vue';
  import TextInput from '@/Components/TextInput.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import { useI18n } from 'vue-i18n';

  export default {
    components: {
      Modal,
      TextInput,
      PrimaryButton,
    },
    setup() {
      const { t } = useI18n({});
      return { t };
    },
    data() {
      return {
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      };
    },
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      close: {
        type: Function,
        required: true,
      },
    },
  };
</script>
