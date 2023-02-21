<script setup>
import PublicStudyRoom from './Detail/PublicStudyRoom.vue';

const props = defineProps({
  publicStudyrooms: {
    type: Array,
  },
});
</script>

<template>
  <h3 class="text-3xl">Openbare Studeerkamers</h3>
  <div class="flex flex-col space-y-4 pt-5">
    <PublicStudyRoom
      v-for="room in $page.props.publicStudyrooms"
      :room="room"
    />
  </div>
</template>
