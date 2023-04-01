<template>
  <h3 class="text-3xl">Uitnodigingen</h3>
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
            <button type="submit" class="bg-gray-200 p-1.5  rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </button>
          </form>
        </div>
        <div class="">
          <form :action="route('declineInvite')" method="post">
            <input type="hidden" name="_token" :value="csrf">
            <input type="hidden" name="invite_id" :value="invite.id">

            <button type="submit" class="bg-gray-200 p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  export default {
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
