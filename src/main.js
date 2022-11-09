/*
 * @Description:
 * @FilePath: \micro-front-end\src\main.js
 * @Date: 2022-11-07 15:57:53
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-09 16:43:47
 * @author: Lin_kangjing
 */
import Vue from "vue";
import App from "./App.vue";
// import SubApp from "./SubApp.vue";
import router from "./router";
import {
  registerMicroApps,
  start,
  runAfterFirstMounted,
  // initGlobalState
} from "qiankun";

Vue.config.productionTip = false;

// function vueRender({ loading }) {
//   return new Vue({
//     template: `
//       <div id="subapp-container">
//         <h4 v-if="loading" class="subapp-loading">Loading...</h4>
//         <div id="subapp-viewport"></div>
//       </div>
//     `,
//     el: '#subapp-container',
//     data() {
//       return {
//         loading,
//       };
//     },
//     render(h){

//     }
//   }).$mount("#app");
// }
// eslint-disable-next-line no-unused-vars
// let app = null;
// function render() {
//   app = new Vue({
//     render: (h) => h(App),
//     router,
//   }).$mount("#app");
// }
// render();
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
