import Vue from "vue";
import router from "./router/routerConfig"; // 路由
import App from "./app.vue";
import i18n from './i18' // 国际化
import store from './vuex' // 状态管理
import axios from './utils/request' // 接口请求封装
import './Mock' // 模拟后台数据
import "view-design/dist/styles/iview.css"; // view样式
import './theme/index.less'; // 主题样式
Vue.prototype.$axios = axios
new Vue({
  el: "#app",
  i18n,
  router,
  store,
  render: h => h(App)
});
