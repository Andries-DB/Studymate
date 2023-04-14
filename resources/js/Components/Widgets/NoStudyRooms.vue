<template>
  <div class="lg:w-1/3 w-full lg:h-36 h-24 bg-white text-black hover:bg-white transform transition hover:-translate-y-1 border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3 hover:cursor-pointer">
    <PlusIcon class="h-5 w-5"/>
    <p>{{ $t('Widgets.NoStudyRooms') }}</p>
  </div>

</template>

<script>
import { PlusIcon } from '@heroicons/vue/20/solid';
import { useI18n } from 'vue-i18n';

export default {
  components: {
    PlusIcon
  },
  setup() {
      const {t} = useI18n({});
      return {
        t
      }
    }
};

</script>
