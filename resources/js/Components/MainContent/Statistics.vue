<template>
  <div class="space-y-7">
    <h3 class="text-3xl">
      Statistieken
    </h3>

    <div class="flex flex-col md:flex-row gap-4">
      <div class="bg-stone-200 rounded-xl p-5 flex-1 space-y-10">
        <p class="inline-block text-5xl">
          {{ $page.props.study_stats.id }}
        </p>
        <h6 text-lg>
          Tijd gestudeerd
        </h6>
      </div>
      <div class="bg-stone-200 rounded-xl p-5 flex-1 space-y-10">
        <p class="inline-block text-5xl">
          {{ $page.props.studyStats.completed_tasks }}
        </p>
        <h6 text-lg>
          Afgeronde taken
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    study_stats: {
      type: Object,
    },
  },
}

</script>
