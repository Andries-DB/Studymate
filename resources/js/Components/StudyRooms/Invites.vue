<script setup>
  const props = defineProps({
    invites: {
      type: Array,
      required: true,
    },
  });
</script>


<template>
  <h3 class="text-3xl">Uitnodigingen</h3>
  <div v-for="invite in $page.props.invites" >
    <div class="w-full bg-indigo-500 flex justify-between p-4 rounded-xl text-gray-50 items-center mb-3">
      <div class="" name="INFO">
        <h3 class="text-xl">{{ invite.studyroom.name }}</h3>
        <p class="text-sm text-gray-200">Verzonden op {{ moment(invite.created_at).format("DD/MM/YYYY") }}</p>
      </div>
      <div class="flex gap-2" name="CTA">
       <div class="">
        ACCEPT
       </div>
       <div class="">
        REJECT
       </div>
      </div>
    </div>
    </div>
</template>

<script>
  import moment from 'moment';
  export default {
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      moment: moment,
    }),
  }
</script>
