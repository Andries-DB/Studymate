<template>
  <h4>{{ $t('Dashboard.LatestStudyRooms.Title') }}</h4>
  <p class="text-gray-500">{{ $t('Dashboard.LatestStudyRooms.Description') }}</p>
  <div class="flex flex-col space-y-4 pt-5">
    <div class="flex justify-center" v-if="$page.props.studyrooms.length === 0 ">
      <NoStudyRoomOwner />
    </div>
    <StudyRoom
      v-for="room in $page.props.studyrooms"
      :studyroom="room"
      :canEdit="false"
      class="lg:w-full w-10/12"
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
