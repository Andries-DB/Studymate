<template>
  <a :href="route('study', studyroom.id)">
    <div
    class="bg rounded-xl text-white p-4 flex justify-between items-center flex-row gap-7 bg-indigo-500"
    v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(storage/' + studyroom.image + ')' }"
    >
    <div class="flex flex-col justify-between p-2">
      <h3>{{ studyroom.name }}</h3>
      <p>{{ studyroom.description }}</p>
    </div>


    <div class="items-center" v-if="canEdit == true">
      <form :action="route('deleteSelfFromStudyRoom')" method="post">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="studyroom.id">
        <TertiaryButton type="submit">
          <TrashIcon class="w-5 h-5" />
        </TertiaryButton>
      </form>
    </div>
  </div>
  </a>
  </template>

<script>
  import { TrashIcon } from "@heroicons/vue/20/solid";
  import TertiaryButton from '@/Components/Buttons/TertiaryButton.vue';

  export default {
    components: {
      TertiaryButton,
      TrashIcon
    },
    props: {
      studyroom: {
        type: Object,
        required: true,
      },
      canEdit: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),

  }
</script>

<style>
  .bg {
    background-size: cover;
    background-position: center;
  }
</style>
