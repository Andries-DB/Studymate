<template>
  <div class="flex gap-5">
    <SecondaryButton id="nl" class="mt-3 language-button active" @click="switchLanguage('nl')">
      {{ $t('Settings.Languages.Dutch') }}
    </SecondaryButton>
    <SecondaryButton id="en" class="mt-3 language-button" @click="switchLanguage('en')">
      {{ $t('Settings.Languages.English') }}
    </SecondaryButton>
  </div>

</template>

<script>

import SecondaryButton from '@/Components/Buttons/SecondaryButton.vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale, t} = useI18n({});
    return { locale, t };
  },
  components: {
    SecondaryButton
  },
  methods: {
    switchLanguage(key) {
      this.$i18n.locale = key;
      this.$inertia.put('/laravel-language/' + key);

      // Add active class to the selected language
      const languageButtons = document.querySelectorAll('.language-button');
      languageButtons.forEach((button) => {
        button.classList.remove('active');
      });
      document.getElementById(key).classList.add('active');
    },
  }
};
</script>

<style scoped>
  .active {
    background-color: rgb(99 102 241);
    color: #fff;
  }
</style>

