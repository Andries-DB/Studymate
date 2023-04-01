<template>
  <div class="space-y-7">
    <h3 class="text-3xl">
      Vrienden
    </h3>
    <div class="flex flex-col md:flex-row gap-4" v-for="friend in $page.props.friends">
      <Friend :friend="friend" :users="$page.props.users"/>
    </div>
  </div>
</template>

<script>
import Friend from './Friend.vue';

export default {
  components: {
    Friend,
  },
  props: {
    friends: {
      type: Array,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>



