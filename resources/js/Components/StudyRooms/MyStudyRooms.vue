<template>
  <h4>Mijn studeerkamers</h4>
  <p class="text-gray-500">Overzicht van alle studeerkamers die je hebt aangemaakt</p>
  <div class="flex flex-col space-y-4 pt-5">
    <div class="flex justify-center" v-if="$page.props.myStudyrooms.length === 0 ">
      <NoStudyRoomOwner @click="showModal()" />
    </div>
    <MyStudyRoom
      v-for="room in $page.props.myStudyrooms"
      :room="room"
    />
  </div>

  <StudyRoomModal
    :show="addStudyRoom"
    :close="closeModal"
  />
</template>

<script>
  import MyStudyRoom from '@/Components/StudyRooms/Detail/MyStudyRoom.vue';
  import NothingToShow from '@/Components/NothingToShow.vue';
  import NoStudyRoomOwner from '../Widgets/NoStudyRoomOwner.vue';
  import { ref } from 'vue';
  import StudyRoomModal from '@/Components/Modals/StudyRoomModal.vue';

  const addStudyRoom = ref(false);

  export default {
    components: {
      MyStudyRoom,
      NothingToShow,
      NoStudyRoomOwner,
      StudyRoomModal
    },
    props: {
      myStudyrooms: {
        type: Array,
      },
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
      addStudyRoom,
    }),
  }
</script>
