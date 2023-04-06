<template>
  <h4>Nieuwste studeerkamers</h4>
  <p class="text-gray-500">Overzicht van de nieuwste studeerkamers</p>
  <div class="flex flex-col space-y-4 pt-5">
    <div class="flex justify-center" v-if="$page.props.studyrooms.length === 0 ">
      <NoStudyRoomOwner @click="showModal()" />
    </div>
    <StudyRoom
      v-for="room in $page.props.studyrooms"
      :studyroom="room"
      :canEdit="false"
    />
</div>

</template>

<script>
  import StudyRoom from '@/Components/StudyRooms/Detail/StudyRoom.vue';
  import NoStudyRoomOwner from '../Widgets/NoStudyRoomOwner.vue';

  export default {
    components: {
      StudyRoom,
      NoStudyRoomOwner,
    },
    props: {
      studyrooms: {
        type: Array,
      },
    },
  }
</script>
