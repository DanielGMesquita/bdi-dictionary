import Vue from 'vue';
import VueI18n from 'vue-i18n';
import pt from '@/language/pt';
import en from '@/language/en';

Vue.use(VueI18n);

const messages = {
  pt,
  en
};

export default new VueI18n({
  locale: 'pt', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
});
