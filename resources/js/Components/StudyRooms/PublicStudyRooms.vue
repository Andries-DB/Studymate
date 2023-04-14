<template>
  <h4>{{ $t('StudyRooms.PublicStudyRooms.Title') }}</h4>
  <p class="text-gray-500">{{ $t('StudyRooms.PublicStudyRooms.Description') }}</p>
  <div class="flex flex-col space-y-4 pt-5 ">
    <PublicStudyRoom
      v-for="room in $page.props.publicStudyrooms"
      :room="room"
      class="lg:w-full w-10/12"
    />
  </div>
</template>

<script>
  import PublicStudyRoom from './Detail/PublicStudyRoom.vue';

  export default {
    components: {
      PublicStudyRoom,
    },
    props: {
      publicStudyrooms: {
        type: Array,
      },
    },
  }
</script>
