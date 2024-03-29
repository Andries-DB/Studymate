<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { LockClosedIcon } from '@heroicons/vue/20/solid';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout :title="$t('Auth.Login.Title')">
        <Head title="Log in" />
        <form @submit.prevent="submit" class="mt-8 lg:mx-0 mx-6 space-y-6">
            <div class="space-y-2 rounded-md shadow-sm">
                <div>

                    <TextInput
                    id="email"
                    type="email"
                    name="email"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    :placeholder="$t('Auth.Login.Email')"
                    />
                </div>
                <InputError class="mt-2" :message="form.errors.email" />
                <div>
                    <TextInput
                    id="password"
                    type="password"
                    name="password"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    :placeholder="$t('Auth.Login.Password')"
                />
                </div>
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="flex items-center justify-between">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-black hover:text-indigo-500">{{ $t('Auth.Login.Remember') }}</span>
                </label>
                <div class="text-sm">
                    <a :href="route('password.request')" v-if="canResetPassword" class="font-medium text-black hover:text-indigo-500">{{ $t('Auth.Login.ForgotPW') }}</a>
                </div>
            </div>

            <div class="flex justify-between items-center gap-5">
                <div class="">
                    <Link :href="route('register')" class="font-medium text-sm text-black hover:text-indigo-500">{{ $t('Auth.Login.Register') }}</Link>
                </div>
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                  {{ $t('Auth.Login.Button')  }}
                </PrimaryButton>
            </div>

        </form>
    </GuestLayout>
</template>
