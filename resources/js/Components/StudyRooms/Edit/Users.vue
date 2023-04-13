<template>
  <div class="flex items-center justify-between  gap-5 w-11/12 h-auto bg-gray-200 px-5 py-3 rounded-lg">
    <div class="">
      <div class="flex flex-row gap-5 items-center">
        <div class="w-16 h-16 rounded-full hidden md:block" :style="{'background-image':' url(../../storage/' + studyroomuserInfo.avatar + ')' }" id="avatar" />
        <div class="" name="INFO">
          <h4>{{ studyroomuserInfo.username }} - <strong>{{ studyroomuserInfo.name }}</strong></h4>
          <p class="text-sm text-black">{{ $t('StudyRoomDetail.Invite.JoinedOn') }} {{ moment(studyroomuser.created_at).format("DD/MM/YYYY") }}</p>
        </div>
      </div>
    </div>
    <div class="" name="CTA">
      <form method="post" :action="route('deleteUserFromStudyRoom')" class="bg-gray-200 p-0.30 rounded-lg">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="studyroomuser.id">
        <input type="hidden" name="studyroom_id" :value="studyroomuser.study_room_id">
        <input type="hidden" name="user_id" :value="studyroomuser.user_id">
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
  import { useI18n } from 'vue-i18n';


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
    setup() {
      const { t } = useI18n({});
      return { t };
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      moment: moment,
    }),
  }
</script>
