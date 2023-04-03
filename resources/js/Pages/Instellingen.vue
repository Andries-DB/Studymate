<template>
  <Head title="Instellingen" />
  <div class="grid grid-cols-12 gap-2 h-screen">
    <div class="col-span-12 xl:col-span-12 rounded-r-[37px] flex gap-2 md:divide-x-2 flex-col lg:flex-row">
      <div class="lg:w-[250px] w-full lg:h-full overflow-hidden">
        <NavBar />
      </div>
      <div class="flex-1 overflow-hidden">
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
                  <DeleteUserForm class="max-w-xl" />
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import DeleteUserForm from './Profile/Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Profile/Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
import NavBar from '@/Components/Navigation/Navbar.vue';

export default {
    components: {
        DeleteUserForm,
        UpdatePasswordForm,
        UpdateProfileInformationForm,
        NavBar,
        Head,
    },
    props: {
        mustVerifyEmail: Boolean,
        status: String,
    },
};
</script>
