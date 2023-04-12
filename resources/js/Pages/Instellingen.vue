<template>
  <Head title="Instellingen" />
  <UserLayout>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <UpdateProfileInformationForm
            :must-verify-email="mustVerifyEmail"
            :status="status"
            class="max-w-xl"
          />
        </div>
        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <UpdatePasswordForm class="max-w-xl" />
        </div>
        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <ChangeLanguage class="max-w-xl" />
        </div>
        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <DeleteUserForm class="max-w-xl" />
        </div>
      </div>
    </div>
  </UserLayout>
</template>


<script>
import { Head } from '@inertiajs/vue3';
import UserLayout from '@/Layouts/UserLayout.vue';
import DeleteUserForm from './Profile/Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Profile/Partials/UpdateProfileInformationForm.vue';
import ChangeLanguage from './Profile/Partials/ChangeLanguage.vue';

export default {
    components: {
    DeleteUserForm,
    UpdatePasswordForm,
    UpdateProfileInformationForm,
    UserLayout,
    Head,
    ChangeLanguage
},
    props: {
        mustVerifyEmail: Boolean,
        status: String,
    },
};
</script>
