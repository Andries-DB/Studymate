<template>
  <div class="flex justify-between items-center py-3">
    <div class="">
      <h4>{{ $t('StudyRooms.SharedStudyRooms.Title') }}</h4>
      <p class="text-gray-500">{{ $t('StudyRooms.SharedStudyRooms.Description') }}</p>
    </div>

    <div>
      <PrimaryButton v-on:click="showModal()" id="addProject">
        + {{ $t('StudyRooms.CTA.AddStudyRoom') }}
      </PrimaryButton>
    </div>
  </div>
  <div class="flex flex-row flex-wrap gap-3 w-full">
    <div class="flex justify-start w-full cursor-pointer" v-if="$page.props.sharedStudyRoom.length === 0" @click="showModal()">
      <NoStudyRooms @click="showModal()" />
    </div>
    <div v-for="shared in $page.props.sharedStudyRoom">
      <StudyRoom :studyroom="shared.studyroom" :canEdit="true"/>
    </div>
  </div>

  <StudyRoomModal
    :show="addStudyRoom"
    :close="closeModal"
  />
</template>

<script>
  import Modal from '@/Components/Modal.vue';
  import { ref } from 'vue';
  import StudyRoom from '@/Components/StudyRooms/Detail/StudyRoom.vue';
  import InputLabel from '@/Components/InputLabel.vue';
  import TextInput from '@/Components/TextInput.vue';
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import StudyRoomModal from '@/Components/Modals/StudyRoomModal.vue';
  import NoStudyRooms from '@/Components/Widgets/NoStudyRooms.vue';
  import { useI18n } from 'vue-i18n';

  const addStudyRoom = ref(false);

  export default {
    components: {
      StudyRoom,
      InputLabel,
      TextInput,
      PrimaryButton,
      Modal,
      StudyRoomModal,
      NoStudyRooms
    },
    props: {
      sharedStudyRoom: {
        type: Array,
      },
    },
    setup() {
      const { t } = useI18n({});
      return { t };
    },
    methods: {
      showModal() {
        addStudyRoom.value = true;
      },
      closeModal() {
        addStudyRoom.value = false;
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      addStudyRoom,
    }),
  }
</script>

<style>
.close {
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  font-size: 30px;
  transform: rotate(45deg);
}
</style>
