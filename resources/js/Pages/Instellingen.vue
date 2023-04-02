<template>
  <Head title="Dashboard" />
  <div class="grid grid-cols-12 gap-2 h-screen">
      <div class="col-span-2 rounded-r-[37px] flex flex-col lg:flex-row md:divide-x-2 ">
          <div class="w-full overflow-hidden bg-stone-50 h-full">
              <NavBar />
          </div>
      </div>
      <div class="col-span-10 xl:block">
          <div class="flex-1 overflow-hidden w-full h-full">
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
import NavBar from '@/Components/Navigation/NavBar.vue';

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
