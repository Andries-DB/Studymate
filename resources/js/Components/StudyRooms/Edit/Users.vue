<script setup>
  import moment from 'moment';

  const props = defineProps({
    studyroomuserInfo: {
      type: Object,
    },
    studyroomuser: {
      type: Object,
    },
  });
</script>

<template>
  <div class="w-full bg-indigo-500 flex justify-between p-4 rounded-xl text-gray-50 items-center">
    <div class="" name="INFO">
      <h3 class="text-xl">{{ studyroomuserInfo.first_name + ' ' + studyroomuserInfo.last_name }} - <strong>{{ studyroomuserInfo.email }}</strong></h3>
      <p class="text-sm text-gray-200">Toegetreden op {{ moment(studyroomuserInfo.created_at).format("DD/MM/YYYY") }}</p>
    </div>
    <div class="" name="CTA">
      <form method="post" :action="route('deleteUserFromStudyRoom')" class="bg-gray-200 p-0.30 rounded-lg">
        <input type="hidden" name="_token" :value="csrf">
        <input type="hidden" name="id" :value="studyroomuser.id" />
        <button type="submit" class="text-white p-2 border-none cursor-pointer text-base">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-indigo-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </button>
    </form>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      moment: moment,
    }),
  }
</script>
