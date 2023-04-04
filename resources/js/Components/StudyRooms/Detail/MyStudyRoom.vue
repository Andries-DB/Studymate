<template>
  <div
    class="bg rounded-xl text-white p-4 flex justify-between flex-row gap-7 bg-indigo-500"
    :style="{'background-image':'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(storage/' + room.studyroom.image + ')' }"
    >
    <a class="p-2">
      <div class="flex justify-between items-center">
        <h3>{{ room.studyroom.name }}</h3>
      </div>
      <p>{{ room.studyroom.description }}</p>
    </a>
    <div class="flex items-center gap-2">
      <SecondaryAnchor :href="route('studyroomDetail' , room.study_room_id)">
        <PencilIcon class="w-5 h-5" />
      </SecondaryAnchor>
      <form method="post" class="bg-gray-200 p-0.30 rounded-lg cursor-pointer">
        <input type="hidden" name="_token" :value="csrf">
        <TertiaryButton type="submit">
          <TrashIcon class="w-5 h-5" />
        </TertiaryButton>
      </form>
    </div>
  </div>
</template>

<script>
  import TertiaryButton from '@/Components/Buttons/TertiaryButton.vue';
  import SecondaryAnchor from '@/Components/Anchors/SecondaryAnchor.vue';
  import { TrashIcon, PencilIcon } from "@heroicons/vue/20/solid";

  export default {
    components: {
    TertiaryButton,
    SecondaryAnchor,
    PencilIcon,
    TrashIcon
},
    props: {
      room: {
        type: Object,
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }

</script>
