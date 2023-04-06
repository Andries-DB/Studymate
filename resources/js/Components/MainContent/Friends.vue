<template>
  <div class="space-y-7">
    <div class="flex flew-row justify-between">
      <div class="">
        <h4>Vrienden</h4>
        <p class="text-gray-500">Hieronder staan al je vrienden.</p>
      </div>
      <div>
        <TertiaryButton @click="openModal()">
          <PlusIcon class="w-6 h-6"/>
        </TertiaryButton>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4" v-for="friend in $page.props.friends">
      <Friend :friend="friend" :users="$page.props.users"/>
    </div>
  </div>

  <MakeFriendsModal
    :show="AddFriend"
    :close="this.closeModal"
    :users="this.$page.props.users"
    :friends="this.$page.props.friends"
  />
</template>

<script>

import { ref } from 'vue';
import { PlusIcon } from '@heroicons/vue/20/solid';
import TertiaryButton from '@/Components/Buttons/TertiaryButton.vue';
import MakeFriendsModal from '@/Components/Modals/MakeFriendsModal.vue';
import Friend from './Friend.vue';

const AddFriend = ref(false);

export default {
  components: {
    Friend,
    TertiaryButton,
    PlusIcon,
    MakeFriendsModal,
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
  methods: {
    openModal() {
      AddFriend.value = true;

    },
    closeModal() {
      AddFriend.value = false;
    },
  },
  data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      AddFriend,
    }),
}
</script>



