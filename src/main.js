/*
 * @Description:
 * @FilePath: \micro-front-end\src\main.js
 * @Date: 2022-11-07 15:57:53
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-10 14:46:16
 * @author: Lin_kangjing
 */
import Vue from "vue";
import App from "./App.vue";
// import Loading from "./Loading.vue";
import router from "./router";
import {
  registerMicroApps,
  start,
  runAfterFirstMounted,
  // initGlobalState
} from "qiankun";

Vue.config.productionTip = false;

let app = null;
function render(loading = false) {
  // body
  if (!app) {
    app = new Vue({
      data() {
        return{
          loading: false,
        }
      },
      render: function(h) {
        console.log('%c trigger render function','color:red;')
        return h(App, { props: { loading: this.loading } });
      },
      router,
    }).$mount("#app");
  } else {
    app.loading = !!loading;
  }
}
render();

registerMicroApps([
  {
    name: "sub app", // app name registered
    entry: "//localhost:8001",
    container: "#subApp",
    loader: render,
    // loader: (loading)=>{
    //   console.log({loading})
    // },
    activeRule: (location) => {
      const { pathname } = location;
      if (pathname.includes("/subapp")) {
        return true;
      }
      return false;
    },
  },
]);

// 微应用通讯
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
