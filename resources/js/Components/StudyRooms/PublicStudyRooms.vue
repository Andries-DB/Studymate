<template>
  <h4>Openbare Studeerkamers</h4>
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
