/*
 * @Description: 
 * @FilePath: \micro-front-end\src\subApp\vueDemo\src\router\index.js
 * @Date: 2022-11-07 16:37:28
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-09 15:38:14
 * @author: Lin_kangjing
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const createRouter = (config) =>
  new Router({
    mode: "history",
    ...config,
    routes: [
      {
        path: "/",
        component: ()=>import('@/views/base.vue'),
        children: [
          {
            path: "home2",
            name: "home2",
            component: () =>
              import(/* webpackChunkName: "home" */ "@/views/home.vue"),
          },
          {
            path: "other2",
            name: "other2",
            component: () =>
              import(/* webpackChunkName: "other" */ "@/views/other.vue"),
          },
        ],
      },
    ],
  });

export default createRouter;
