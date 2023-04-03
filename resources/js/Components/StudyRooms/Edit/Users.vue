<template>
  <div class=" bg-indigo-500 flex justify-between p-4 rounded-xl text-gray-50 items-center">
    <div name="INFO">
      <h3 class="text-xl">{{ studyroomuserInfo.first_name + ' ' + studyroomuserInfo.last_name }} - <strong>{{ studyroomuserInfo.email }}</strong></h3>
      <p class="text-sm text-gray-200">Toegetreden op {{ moment(studyroomuserInfo.created_at).format("DD/MM/YYYY") }}</p>
    </div>
    <div class="" name="CTA">
      <form method="post" :action="route('deleteUserFromStudyRoom')" class="bg-gray-200 p-0.30 rounded-lg">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="studyroomuser.id" />
      <TertiaryButton type="submit">
        <TrashIcon class="w-5 h-5" />
      </TertiaryButton>
    </form>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import TertiaryButton from '@/Components/Buttons/TertiaryButton.vue';
  import { TrashIcon } from '@heroicons/vue/20/solid';

  export default {
    components: {
      TertiaryButton,
      TrashIcon,
    },
    props: {
      studyroomuserInfo: {
        type: Object,
        required: true,
      },
      studyroomuser: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      moment: moment,
    }),
  }
</script>
