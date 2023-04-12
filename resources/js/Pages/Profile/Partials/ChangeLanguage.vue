<template>
    <a @click="switchLanguage('nl')" href="#"> Nederlands </a>
    <a @click="switchLanguage('en')" href="#"> English </a>

  {{ $t('Routes.Register.MakeAcc') }}
</template>

<script>

import SecondaryButton from '@/Components/Buttons/SecondaryButton.vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale} = useI18n({});
    return { locale };
  },
  components: {
    SecondaryButton
  },
  methods: {
    switchLanguage(key) {
            this.$i18n.locale = key;
            this.$inertia.put('/laravel-language/' + key);
        },
  }
};
</script>

