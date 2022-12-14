/*
 * @Description:
 * @FilePath: \micro-front-end\src\router\index.js
 * @Date: 2022-11-07 16:37:28
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-10 10:05:27
 * @author: Lin_kangjing
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export const RouteView = {
  name: "RouteView",
  render: (h) => h("router-view"),
};
export const MicroFrontEnd = {
  name: "MicroFrontEnd",
  render: (h) =>
    h(
      "div",
      {
        attrs: {
          id: "subApp",
        },
      },
      "this is container"
    ),
}
const createRouter = () =>
  new Router({
    mode: "history",
    // history: createWebHistory(),
    base: "/",
    routes: [
      {
        path: "/",
        component: () => import("@/views/base.vue"),
        redirect: "/home",
        children: [
          {
            path: "/base",
            component: RouteView,
            redirect: "/home",
            children: [
              {
                path: "/home",
                name: "home",
                component: () =>
                  import(/* webpackChunkName: "user" */ "@/views/home.vue"),
              },
              {
                path: "/other",
                name: "other",
                component: () =>
                  import(/* webpackChunkName: "user" */ "@/views/other.vue"),
              },
              // {
              //   path: "/*",
              //   name:'subapp',
              //   component: MicroFrontEnd,
              // },
            ],
          },
        ],
      },
    ],
  });
const router = createRouter();

router.beforeEach((to,from,next) => {
  console.log({to,from})
  // 比qiankun先触发，会导致不能进入微应用
  // if(to.fullPath.includes('/subapp')){
  //   console.log('----------next(/)');
  //   return next('/')
  // }
  next()
})

// 比qiankun前触发
// router.afterEach((to, from) => {
//   console.log('afterEach', {to,from})
// })
export default router;
