import VueRouter from "vue-router";
import Routers from './router'
import Util from "../libs/util";
import ViewUI from "view-design";
import Vue from "vue";
Vue.use(VueRouter);
Vue.use(ViewUI);
// 路由配置
const RouterConfig = {
  mode: "history",
  routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach((to, from, next) => {
  ViewUI.LoadingBar.finish();
  window.scrollTo(0, 0);
});
export default router;