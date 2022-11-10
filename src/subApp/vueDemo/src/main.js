/*
 * @Description:
 * @FilePath: \micro-front-end\src\subApp\vueDemo\src\main.js
 * @Date: 2022-11-07 16:00:32
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-10 11:17:44
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
  router.beforeEach((to,from,next) => {
    console.log('sub app beforEach',{to,from})
    next()
  })
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
  console.log('%c%s',"color: green;","[vue] vue app bootstraped");
}
function onStateChange (props) {
  // props.onGlobalStateChange((value,prev)=>{
  //   // console.log('[onGlobalStateChange - vueDemo]');
  //   // console.log(value)
  //   // console.log(prev)
  // },true)
  props.setGlobalState({
    provider: props.name,
    user:'lkj',
    subapp:true
  })
}
export async function mount(props) {
  console.log("[vue] props from main framework");
  onStateChange(props)
  render(props);
}
export async function unmount() {
  console.log('%c%s',"color: green;","[vue] vue app unmount");
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
