<template>
  <h3 class="text-3xl">Mijn studeerkamers</h3>
  <div class="flex flex-col space-y-4 pt-5">
    <div class="flex justify-center" v-if="$page.props.myStudyrooms.length === 0 ">
      <NothingToShow class="text-base py-5 px-10" >Je hebt nog geen studeerkamers. Voeg er één toe en nodig mensen uit!</NothingToShow>
    </div>
    <MyStudyRoom
      v-for="room in $page.props.myStudyrooms"
      :room="room"
    />
  </div>
</template>

<script>
  import MyStudyRoom from '@/Components/StudyRooms/Detail/MyStudyRoom.vue';
  import NothingToShow from '@/Components/NothingToShow.vue';

  export default {
    components: {
      MyStudyRoom,
      NothingToShow,
    },
    props: {
      myStudyrooms: {
        type: Array,
      },
    },
  }
</script>
