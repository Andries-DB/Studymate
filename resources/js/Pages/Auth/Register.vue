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

        <form @submit.prevent="submit" class="space-y-2">
            <div>
                <TextInput
                    id="first_name"
                    type="text"
                    v-model="form.first_name"
                    required
                    autocomplete="first_name"
                    placeholder="Voornaam"
                />
                <InputError class="mt-2" :message="form.errors.first_name" />
            </div>
            <div>
                <TextInput
                    id="last_name"
                    type="text"
                    v-model="form.last_name"
                    required
                    autocomplete="last_name"
                    placeholder="Achternaam"
                />
                <InputError class="mt-2" :message="form.errors.last_name" />
            </div>
            <div>
                <TextInput
                    id="username"
                    type="text"
                    v-model="form.username"
                    required
                    autocomplete="username"
                    placeholder="Username"
                />
                <InputError class="mt-2" :message="form.errors.username" />
            </div>
            <div >
                <TextInput
                    id="email"
                    type="email"
                    v-model="form.email"
                    required
                    autocomplete="email"
                    placeholder="Email"
                />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div>
                <TextInput
                    id="password"
                    type="password"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                    placeholder="Wachtwoord"
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>
            <div>
                <TextInput
                    id="password_confirmation"
                    type="password"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                    placeholder="Herhaal wachtwoord"
                />
                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>
            <div class="flex items-center justify-between gap-5 pt-5">
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
