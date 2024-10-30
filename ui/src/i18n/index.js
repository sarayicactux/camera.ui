import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Languages from './languages';

const defaultLanguage = 'fa'; // تنظیم زبان فارسی به عنوان پیش‌فرض

/**
 * Update this each time a new translation is added
 * This is displayed in the interface for selecting the language
 *
 * Key (e.g. "en") represents the language shortcut also added to the "languages" array
 * Value (e.g. "English (en)") represents the Text which is displayed in the interface
 */
const languageList = {
  en: 'English (en)',
  fa: 'Persian (fa)',
};

/**
 * Update this array each time a new translation is added
 * It must be a valid language shortcut, please see languages.js for available shortcuts
 */
const languages = ['en', 'fa'];

const supportedLanguages = (lang) => {
  if (!lang) {
    return defaultLanguage;
  }

  switch (lang) {
    case languages.find((l) => l === lang):
      return lang;
    default:
      return defaultLanguage;
  }
};

const currentLanguage = (lang) => {
  if ((!lang || lang === '') && window.navigator && window.navigator.language) {
    return supportedLanguages(Languages[window.navigator.language.toLowerCase()]);
  }

  if (!lang || lang === '') {
    return supportedLanguages(defaultLanguage); // تنظیم پیش‌فرض
  }

  return supportedLanguages(Languages[lang.toLowerCase()]);
};

const loadLanguage = (lang) => {
  return require(`./locale/${currentLanguage(lang)}.json`);
};

const lang = currentLanguage();

Vue.use(VueI18n);

const index18n = new VueI18n({
  locale: lang,
  messages: loadLanguage(lang),
});

// // Watcher برای تغییر dir به صورت پویا
// new Vue({
//   i18n: index18n,
//   watch: {
//     '$i18n.locale'(newLang) {
//       if (newLang === 'fa') {
//         document.querySelector('html').setAttribute('dir', 'rtl');
//       } else {
//         document.querySelector('html').setAttribute('dir', 'ltr');
//       }
//     }
//   }
// }).$mount('#app');

// // تنظیم direction اولیه
// if (lang === 'fa') {
//   document.querySelector('html').setAttribute('dir', 'rtl');
// } else {
//   document.querySelector('html').setAttribute('dir', 'ltr');
// }

export { index18n as i18n, currentLanguage, loadLanguage, supportedLanguages, languageList };
