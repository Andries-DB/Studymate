<script setup>
import StudyRoom from '@/Components/StudyRooms/StudyRoom.vue';

const props = defineProps({
  studyrooms: {
    type: Array,
  },
});
</script>

<template>
  <div class="flex flex-col md:flex-row items-center md:items-stretch gap-6" v-for="studyroom in $page.props.studyrooms">
    <StudyRoom :studyroom="studyroom" />
  </div>
</template>

<script>
export default {
  props: {
    studyrooms: {
      type: Array,
    },
  },
}
</script>
