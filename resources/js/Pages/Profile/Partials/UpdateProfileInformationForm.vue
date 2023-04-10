<script setup>
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import ErrorHandling from '@/Components/Error/ErrorHandling.vue';
import TextInput from '@/Components/TextInput.vue';
import { usePage } from '@inertiajs/vue3';

</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Algemene instellingen</h2>

            <p class="mt-1 text-sm text-gray-600">
              Update je profiel informatie en email adres.
            </p>
        </header>
        <form :action="route('instellingen.update')" method="post" enctype="multipart/form-data">
          <input type="hidden" name="_token" :value="csrf">
          <div class="mt-2">
            <label for="first_name">Voornaam</label>
            <TextInput
              id="first_name"
              name="first_name"
              v-model="usePage().props.auth.user.first_name"
              type="text"
              class="mt-1 block w-full"
              autocomplete="first_name"

            />
            <ErrorHandling id="error_first_name" />
          </div>
          <div class="mt-2">
            <label for="last_name">Achternaam</label>
            <TextInput
              id="last_name"
              name="last_name"
              v-model="usePage().props.auth.user.last_name"
              type="text"
              class="mt-1 block w-full"
              autocomplete="last_name"
            />
            <ErrorHandling id="error_last_name" />
          </div>
          <div class="mt-2">
            <label for="username">Gebruikersnaam</label>
            <TextInput
              id="username"
              name="username"
              v-model="usePage().props.auth.user.username"
              type="text"
              class="mt-1 block w-full"
              autocomplete="username"
            />
            <ErrorHandling id="error_username" />
          </div>
          <div class="mt-2">
            <label for="email">Email</label>
            <TextInput
              id="email"
              name="email"
              v-model="usePage().props.auth.user.email"
              type="email"
              class="mt-1 block w-full"
              autocomplete="email"
            />
            <ErrorHandling id="error_email" />
          </div>
          <div class="mt-2">
            <label for="avatar">Avatar</label>
            <input type="file" name="avatar" id="avatar" class="mt-1 block w-full">
          </div>

          <div class="mt-2">
            <PrimaryButton type="submit" @click="UpdateProfileError()">Sla op</PrimaryButton>
          </div>
        </form>
    </section>
</template>

<script>
  export default {
    methods: {
      UpdateProfileError() {

        // Reset errors
        document.getElementById('error_first_name').innerHTML = '';
        document.getElementById('error_last_name').innerHTML = '';
        document.getElementById('error_username').innerHTML = '';
        document.getElementById('error_email').innerHTML = '';
        // Check if inputs are empty
        if (document.getElementById('first_name').value == '') {
          document.getElementById('error_first_name').innerHTML = 'Voornaam is verplicht';
          event.preventDefault();
        }
        if (document.getElementById('last_name').value == '') {
          document.getElementById('error_last_name').innerHTML = 'Achternaam is verplicht';
          event.preventDefault();
        }
        if (document.getElementById('username').value == '') {
          document.getElementById('error_username').innerHTML = 'Gebruikersnaam is verplicht';
          event.preventDefault();
        }
        if (document.getElementById('email').value == '') {
          document.getElementById('error_email').innerHTML = 'Email is verplicht';
          event.preventDefault();
        }

      }
    },
    data: () => ({
        csrf: document.querySelector("meta[name=\"csrf-token\"]").getAttribute("content"),
    }),
    components: { ErrorHandling }
}
</script>
