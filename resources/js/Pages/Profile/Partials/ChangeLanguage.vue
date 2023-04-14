<template>
  <div class="flex gap-5">
    <SecondaryButton id="nl" class="mt-3" :class="getActive('nl')" @click="switchLanguage('nl')">
      {{ $t('Settings.Languages.Dutch') }}
    </SecondaryButton>
    <SecondaryButton id="en" class="mt-3" :class="getActive('en')" @click="switchLanguage('en')">
      {{ $t('Settings.Languages.English') }}
    </SecondaryButton>
  </div>

</template>

<script>

import SecondaryButton from '@/Components/Buttons/SecondaryButton.vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale} = useI18n({});
    return { locale};
  },
  components: {
    SecondaryButton
  },
  methods: {
    switchLanguage(key) {
      this.$i18n.locale = key;
      this.$inertia.put('/laravel-language/' + key);
      localStorage.setItem('locale', key);

      const buttonen = document.getElementById('en');
      const buttonnl = document.getElementById('nl');

      function removeActive() {
        buttonen.classList.remove('active');
        buttonnl.classList.remove('active');
      }

      if (localStorage.getItem('locale') === 'en') {
        removeActive();
        buttonen.classList.add('active');
      } else {
        removeActive();
        buttonnl.classList.add('active');
      }
    },
    getActive(key) {
      if (localStorage.getItem('locale') === key) {
        return 'active';
      } else {
        return '';
      }

    }
  }
};
</script>

<style scoped>
.active {
  background-color: rgb(99 102 241);
  color: white;
  }

</style>
