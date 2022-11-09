/*
 * @Description:
 * @FilePath: \micro-front-end\src\main.js
 * @Date: 2022-11-07 15:57:53
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-09 15:58:18
 * @author: Lin_kangjing
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  registerMicroApps,
  start,
  runAfterFirstMounted,
  // initGlobalState
} from "qiankun";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

registerMicroApps([
  {
    name: "sub app", // app name registered
    entry: "//localhost:8001",
    container: "#subApp",
    // activeRule:"/subapp"
    activeRule: (location) => {
      const { pathname } = location;
      if (pathname.includes("/subapp")) {
        return true;
      }
      return false;
    },
  },
]);
// const { onGlobalStateChange, } = initGlobalState({
//   provider: 'main',
//   user:'lkj'
// });

// onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
});
runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
