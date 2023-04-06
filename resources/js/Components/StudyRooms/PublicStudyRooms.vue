<template>
  <h4>Openbare studeerkamers</h4>
  <p class="text-gray-500">Overzicht van alle openbare studeerkamers</p>
  <div class="flex flex-col space-y-4 pt-5">
    <PublicStudyRoom
      v-for="room in $page.props.publicStudyrooms"
      :room="room"
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
