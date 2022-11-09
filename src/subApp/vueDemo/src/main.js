/*
 * @Description:
 * @FilePath: \micro-front-end\src\subApp\vueDemo\src\main.js
 * @Date: 2022-11-07 16:00:32
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-09 10:54:58
 * @author: Lin_kangjing
 */
import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import createRouter from "./router";
import "./index.css";
Vue.config.productionTip = false;

let instance = null;
let router = null;
function render(props = {}) {
  router = createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/subapp/" : "/",
  });
  const { container } = props;
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  console.log("[vue] vue app unmount");
  console.log(router);
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
