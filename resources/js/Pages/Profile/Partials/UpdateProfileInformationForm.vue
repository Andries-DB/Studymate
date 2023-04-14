<script setup>
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import ErrorHandling from '@/Components/Error/ErrorHandling.vue';
import TextInput from '@/Components/TextInput.vue';
import { usePage } from '@inertiajs/vue3';

</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">{{ $t('Settings.UpdateProfile.Title') }}</h2>

            <p class="mt-1 text-sm text-gray-600">
              {{ $t('Settings.UpdateProfile.Description') }}
            </p>
        </header>
        <form :action="route('instellingen.update')" method="post" enctype="multipart/form-data">
          <input type="hidden" name="_token" :value="csrf">
          <div class="mt-2">
            <label for="first_name">{{ $t('Settings.UpdateProfile.FirstName.Label') }}</label>
            <TextInput
              id="first_name"
              name="first_name"
              v-model="usePage().props.auth.user.first_name"
              type="text"
              class="mt-1 block w-full"
              autocomplete="first_name"

            />
            <ErrorHandling id="error_first_name" class="hidden">
              {{ $t('Settings.UpdateProfile.FirstName.Error') }}
            </ErrorHandling>
          </div>
          <div class="mt-2">
            <label for="last_name">{{ $t('Settings.UpdateProfile.LastName.Label') }}</label>
            <TextInput
              id="last_name"
              name="last_name"
              v-model="usePage().props.auth.user.last_name"
              type="text"
              class="mt-1 block w-full"
              autocomplete="last_name"
            />
            <ErrorHandling id="error_last_name" class="hidden" >
              {{ $t('Settings.UpdateProfile.LastName.Error') }}
            </ErrorHandling>
          </div>
          <div class="mt-2">
            <label for="username">{{ $t('Settings.UpdateProfile.Username.Label') }}</label>
            <TextInput
              id="username"
              name="username"
              v-model="usePage().props.auth.user.username"
              type="text"
              class="mt-1 block w-full"
              autocomplete="username"
            />
            <ErrorHandling id="error_username" class="hidden">
              {{ $t('Settings.UpdateProfile.Username.Error') }}
            </ErrorHandling>
          </div>
          <div class="mt-2">
            <label for="email">{{ $t('Settings.UpdateProfile.Email.Label') }}</label>
            <TextInput
              id="email"
              name="email"
              v-model="usePage().props.auth.user.email"
              type="email"
              class="mt-1 block w-full"
              autocomplete="email"
            />
            <ErrorHandling id="error_email" class="hidden">
              {{ $t('Settings.UpdateProfile.Email.Error') }}
            </ErrorHandling>
          </div>
          <div class="mt-2">
            <label for="avatar">{{ $t('Settings.UpdateProfile.Avatar.Label') }}</label>
            <input type="file" name="avatar" id="avatar" class="mt-1 block w-full">
          </div>

          <div class="mt-2">
            <PrimaryButton type="submit" @click="UpdateProfileError()">{{ $t('Settings.UpdateProfile.Button') }}</PrimaryButton>
          </div>
        </form>
    </section>
</template>

<script>
  export default {
    methods: {
      UpdateProfileError() {

        // Reset errors
        document.getElementById('error_first_name').classList.add('hidden');
        document.getElementById('error_last_name').classList.add('hidden');
        document.getElementById('error_username').classList.add('hidden');
        document.getElementById('error_email').classList.add('hidden');

        // Check if inputs are empty
        if (document.getElementById('first_name').value == '') {
          document.getElementById('error_first_name').classList.remove('hidden');
          event.preventDefault();
        }
        if (document.getElementById('last_name').value == '') {
          document.getElementById('error_last_name').classList.remove('hidden');
          event.preventDefault();
        }
        if (document.getElementById('username').value == '') {
          document.getElementById('error_username').classList.remove('hidden');
          event.preventDefault();
        }
        if (document.getElementById('email').value === '') {
          document.getElementById('error_email').classList.remove('hidden');
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
