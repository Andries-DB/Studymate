<template>

  <div v-for="user in $page.props.users">
    <div :id="'user-' + user.id" class=" flex items-center hover:bg-indigo-500 gap-5 w-11/12 h-auto bg-gray-200 px-5 py-3 rounded-lg cursor-pointer" @click="this.checkifUserisAdded(user)" added="false">
    <div class="w-16 h-16 rounded-full" :style="{'background-image':' url(../../storage/' + user.avatar + ')' }" id="avatar" />
    <div class="">
      <div class="flex flex-row items-center gap-2">
        <h3>{{ user.username }}</h3> - <h4>{{ user.name }}</h4>
      </div>
      <p class="text-sm">{{ user.email }}</p>
    </div>
  </div>
  </div>

  <div class="" v-if="$page.props.users.length == 0">
    <NothingToShow class="w-11/12">
      Er zijn geen gebruikers om uit te nodigen.
    </NothingToShow>
  </div>

  <form :action="route('addUserToStudyRoom')" method="post">
    <input type="hidden" name="_token" :value="csrf">
    <input type="hidden" name="id" :value="studyroom.id">
    <input type="hidden" name="users" :value="users">

    <PrimaryButton type="submit" class="mt-3 w-11/12" @click="UsersError()">
      Nodig uit
    </PrimaryButton>
    <ErrorHandling id="usersError">
    </ErrorHandling>
  </form>
</template>

<script>
  import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
  import ErrorHandling from '@/Components/Error/ErrorHandling.vue';
import NothingToShow from '@/Components/NothingToShow.vue';
  import { ref } from 'vue';

  // ref array
  let users = ref([]);

  export default {
    props: {
        studyroom: {
            type: Object
        },
        user: {
            type: Object
        },
        studyroom: {
            type: Object
        },
    },
    methods: {
      checkifUserisAdded(user) {
        const value = document.getElementById('user-' + user.id).getAttribute("added")

        if (value === 'true') {
          this.removeUserFromArray(user);
        } else {
          this.addUserToArray(user);
        }
      },
      addUserToArray(user) {
        // Add user to array
        users.value.push(JSON.stringify(user));
        console.log(users);

        //set active state
        document.getElementById('user-' + user.id).setAttribute('added', 'true');
        document.getElementById('user-' + user.id).classList.remove('bg-gray-200');
        document.getElementById('user-' + user.id).classList.add('bg-indigo-500');
      },
      removeUserFromArray(user) {
        // Remove name from array
        users.value = users.value.filter(item => item !== JSON.stringify(user));
        console.log(users);

        //set active state
        document.getElementById('user-' + user.id).setAttribute('added', 'false');
        document.getElementById('user-' + user.id).classList.remove('bg-indigo-500');
        document.getElementById('user-' + user.id).classList.add('bg-gray-200');
      },
      UsersError() {
        // Reset all errors
        document.getElementById('usersError').classList.add('hidden');

        if (users.value.length == 0) {
          document.getElementById('usersError').classList.remove('hidden');
          document.getElementById('usersError').innerHTML = 'Je moet minimaal 1 gebruiker selecteren om uit te nodigen.';
          event.preventDefault();
        }
      }
    },
    data() {
      return {
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        // Return ref array, so it can be used in the form but show the value in the view
        users: users
      }
    },
    components: { PrimaryButton, ErrorHandling, NothingToShow }
  }
</script>

<style>
  #avatar {
    background-size: cover;
    background-position: center;
  }

</style>
