<template>
  <div class="flex items-center justify-between  gap-5 w-11/12 h-auto bg-gray-200 px-5 py-3 rounded-lg">
    <div class="flex flex-row gap-5 items-center">
      <div class="w-16 h-16 rounded-full hidden md:block" :style="{'background-image':' url(../../storage/' + invitedUser.avatar + ')' }" id="avatar" />
      <div class="" name="INFO">
      <h4>{{ invitedUser.first_name + ' ' + invitedUser.last_name }} - <strong>{{ invitedUser.email }}</strong></h4>
      <p class="text-sm text-black">Verzonden op {{ moment(invitedUser.created_at).format("DD/MM/YYYY") }}</p>
    </div>
    </div>

    <div class="" name="CTA">
      <form method="post" :action="route('deleteInviteFromStudyRoom')" class="">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="invite.id" />
        <!-- Make hidden input with array -->
        <input type="hidden" name="array" :value="this.array" />

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
      invite: {
        type: Object,
        required: true,
      },
      invitedUser: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        moment: moment,
      };
    },
  }
</script>
