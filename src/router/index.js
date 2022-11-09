/*
 * @Description:
 * @FilePath: \micro-front-end\src\router\index.js
 * @Date: 2022-11-07 16:37:28
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-08 17:14:30
 * @author: Lin_kangjing
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export const RouteView = {
  name: "RouteView",
  render: (h) => h("router-view"),
};
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
              {
                path: "/subapp",
                component: {
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
                },
              },
            ],
          },
        ],
      },
    ],
  });
const router = createRouter();
export default router;
