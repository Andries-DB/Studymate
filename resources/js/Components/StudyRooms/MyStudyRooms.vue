<template>
  <h3 class="text-3xl">Mijn studeerkamers</h3>
  <div class="flex flex-col space-y-4 pt-5">
    <MyStudyRoom
      v-for="room in $page.props.myStudyrooms"
      :room="room"
    />
  </div>
</template>

<script>
  import MyStudyRoom from '@/Components/StudyRooms/Detail/MyStudyRoom.vue';

  export default {
    components: {
      MyStudyRoom,
    },
    props: {
      myStudyrooms: {
        type: Array,
      },
    },
  }
</script>
