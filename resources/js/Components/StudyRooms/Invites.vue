<template>
  <h3 class="text-3xl">Uitnodigingen</h3>
  <div class="flex justify-center mt-2" v-if="$page.props.invites.length === 0">
    <NothingToShow class="text-base py-5 px-10">Er zijn geen uitnodigingen om weer te geven</NothingToShow>
  </div>
  <div v-for="invite in $page.props.invites" class="mt-2" >
    <div class="w-full bg-indigo-500 flex justify-between p-4 rounded-xl text-gray-50 items-center mb-3">
      <div class="" name="INFO">
        <h3 class="text-xl">{{ invite.studyroom.name }}</h3>
        <p class="text-sm text-gray-200">Verzonden op {{ moment(invite.created_at).format("DD/MM/YYYY") }}</p>
      </div>
      <div class="flex gap-2" name="CTA">
        <div>
          <form method="post" :action="route('acceptInvite')">
            <input type="hidden" name="_token" :value="csrf">
            <input type="hidden" name="invite_id" :value="invite.id">
            <input type="hidden" name="studyroom_id" :value="invite.studyroom.id">
            <TertiaryButton type="submit">
              <CheckIcon class="w-6 h-6 text-green-500" />
            </TertiaryButton>
          </form>
        </div>
        <div class="">
          <form :action="route('declineInvite')" method="post">
            <input type="hidden" name="_token" :value="csrf">
            <input type="hidden" name="invite_id" :value="invite.id">

            <TertiaryButton type="submit">
              <NoSymbolIcon class="w-6 h-6 text-red-500" />
            </TertiaryButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import TertiaryButton from '../Buttons/TertiaryButton.vue';
  import NothingToShow from '../NothingToShow.vue';
import { NoSymbolIcon, CheckIcon } from '@heroicons/vue/20/solid';

  export default {
    components: {
    TertiaryButton,
    NothingToShow,
    NoSymbolIcon,
    CheckIcon
},
    props: {
      invites: {
        type: Array,
        required: true,
      },
    },
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      moment: moment,
    }),
  }
</script>
