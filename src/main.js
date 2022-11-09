/*
 * @Description:
 * @FilePath: \micro-front-end\src\main.js
 * @Date: 2022-11-07 15:57:53
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-08 17:20:15
 * @author: Lin_kangjing
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start,runAfterFirstMounted } from "qiankun";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

registerMicroApps(
  [
    {
      name: "sub app", // app name registered
      entry: "//localhost:8001",
      container: "#subApp",
      activeRule: "/subapp",
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
      },
    ],
    beforeMount: [
      (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
      },
    ],
  }
);

start({
  sandbox :{
    experimentalStyleIsolation:true
  }
  
});
runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

