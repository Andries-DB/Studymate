<script setup>
  const props = defineProps({
  study_stats: {
    type: Array,
  },
});
</script>

<template>
  <div class="space-y-7">
    <h3 class="text-3xl">
      Statistieken
    </h3>
    <div class="flex flex-col md:flex-row gap-4" v-for="stats in $page.props.study_stats">
      <div class="bg-stone-200 rounded-xl p-5 flex-1 space-y-10">
        <p class="inline-block text-5xl">
          {{ stats.time_studied }} h
        </p>
        <h6 text-lg>
          Tijd gestudeerd
        </h6>
      </div>
      <div class="bg-stone-200 rounded-xl p-5 flex-1 space-y-10">
        <p class="inline-block text-5xl">
          {{ stats.completed_tasks }}
        </p>
        <h6 text-lg>
          Afgeronde taken
        </h6>
      </div>
    </div>
  </div>
</template>
