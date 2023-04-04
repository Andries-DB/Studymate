<template>
  <div
    class="bg rounded-xl text-white p-4 flex justify-between flex-row gap-7 bg-indigo-500"
    :style="{'background-image':'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../../storage/' + studyroom.image + ')' }"
    >
    <a class="p-2" :href="route('study' , studyroom.id)">
      <div class="flex justify-between items-center">
        <h3>{{ studyroom.name }}</h3>
      </div>
      <p>{{ studyroom.description }}</p>
    </a>
  </div>

</template>

<script>
  export default {
    props: {
      studyroom: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style>
  .bg {
    background-size: cover;
    background-position: center;
  }
</style>
