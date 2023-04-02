<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout title="Maak je nieuw account aan">
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="first_name" value="First name" />

                <TextInput
                    id="first_name"
                    type="text"
                    class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    v-model="form.first_name"
                    required
                    autofocus
                    autocomplete="first_name"
                    placeholder="Voornaam"
                />

                <InputError class="mt-2" :message="form.errors.first_name" />
            </div>
            <div>
                <InputLabel for="last_name" value="Last name" />

                <TextInput
                    id="last_name"
                    type="text"
                    class="relative block w-full appearance-none rounded-none border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    v-model="form.last_name"
                    required
                    autofocus
                    autocomplete="last_name"
                    placeholder="Achternaam"
                />

                <InputError class="mt-2" :message="form.errors.last_name" />
            </div>
            <div>
                <InputLabel for="username" value="Username" />

                <TextInput
                    id="username"
                    type="text"
                    class="relative block w-full appearance-none rounded-none border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    v-model="form.username"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="Username"
                />

                <InputError class="mt-2" :message="form.errors.username" />
            </div>

            <div >
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="relative block w-full appearance-none rounded-none border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    v-model="form.email"
                    required
                    autocomplete="email"
                    placeholder="Email"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div>
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="relative block w-full appearance-none rounded-none border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                    placeholder="Wachtwoord"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div>
                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="relative block w-full appearance-none rounded-none rounded-b-md  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                    placeholder="Herhaal wachtwoord"
                />

                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="flex items-center justify-between mt-4 gap-5">
                <Link
                    :href="route('login')"
                    class="text-sm text-black hover:text-indigo-500"
                >
                    Heb je al een account?
                </Link>

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Maak account aan
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
