<template>
  <h4>{{ $t('StudyRooms.PublicStudyRooms.Title') }}</h4>
  <p class="text-gray-500">{{ $t('StudyRooms.PublicStudyRooms.Description') }}</p>
  <div class="flex flex-col space-y-4 pt-5">
    <PublicStudyRoom
      v-for="room in $page.props.publicStudyrooms"
      :room="room"
    />
  </div>
</template>

<script>
  import PublicStudyRoom from './Detail/PublicStudyRoom.vue';
  import { useI18n } from 'vue-i18n';

  export default {
    components: {
      PublicStudyRoom,
    },
    setup() {
      const { t } = useI18n({});
      return { t };
    },
    props: {
      publicStudyrooms: {
        type: Array,
      },
    },
  }
</script>
