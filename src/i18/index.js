import Vue from 'vue';
import ViewUI from 'view-design';
import VueI18n from 'vue-i18n';
import en from 'view-design/dist/locale/en-US';
import zh from 'view-design/dist/locale/zh-CN';
import enMessage from './lang/enLang'
import zhMessage from './lang/zhLang'
Vue.use(VueI18n);
Vue.use(ViewUI);
Vue.locale = () => {};

const messages = {
    en: Object.assign(enMessage, en),
    zh: Object.assign(zhMessage, zh)
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'zh',  // set locale
    messages  // set locale messages
});

new Vue({ i18n }).$mount('#app');
export default i18n