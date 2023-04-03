<template>
  <div class="bg-stone-200 rounded-xl p-5 flex-1 space-y-10">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex-1">
        <h3>
          {{ getFriend(friend).username }}
        </h3>
        <p class="text-gray-500">
          {{ getFriend(friend).email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    friend: {
      type: Object,
      required: true,
    },
    users: {
      type: Array
    }
  },
  methods: {
    getFriend(friends) {
      if (friends.user_1 === this.$page.props.auth.user.id) {
        return this.users.find(user => user.id === friends.user_2);
      } else {
        return this.users.find(user => user.id === friends.user_1);
      }
    },
  }
}
</script>
