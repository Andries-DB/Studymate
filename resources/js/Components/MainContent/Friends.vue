<script setup>
import Friend from './Friend.vue';

const props = defineProps({
  friends: {
    type: Array,
  },
  users: {
    type: Array,
  },
});
</script>

<template>
  <div class="space-y-7">
    <h3 class="text-3xl">
      Vrienden
    </h3>
    <div class="flex flex-col md:flex-row gap-4" v-for="friend in $page.props.friends">
      <Friend :friend="friend"/>
    </div>
  </div>
</template>



