<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

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
          </div>
          <div class="mt-2">
            <label for="avatar">Avatar</label>
            <input type="file" name="avatar" id="avatar" class="mt-1 block w-full">
          </div>

          <div class="mt-2">
            <PrimaryButton type="submit">Sla op</PrimaryButton>
          </div>
        </form>
    </section>
</template>

<script>
  export default {
    data: () => ({
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
  }
</script>
