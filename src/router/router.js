const routers = [
  {
    path: "/",
    meta: {
      title: ""
    },
    component: resolve => require(["../views/login/index.vue"], resolve)
  }
];
export default routers;
