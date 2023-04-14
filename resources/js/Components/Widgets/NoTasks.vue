<template>
  <div class="lg:w-full w-10/12 h-16 bg-white text-black hover:bg-white transform transition hover:-translate-y-1 border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3 hover:cursor-pointer">
    <PlusIcon class="h-5 w-5"/>
    <p>{{ $t('Widgets.NoTasks') }}</p>
  </div>

</template>

<script>
import { PlusIcon } from '@heroicons/vue/20/solid';

export default {
  components: {
    PlusIcon
  },
};

</script>
