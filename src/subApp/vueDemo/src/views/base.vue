<!--
 * @Description: 
 * @FilePath: \micro-front-end\src\subApp\vueDemo\src\views\base.vue
 * @Date: 2022-11-07 16:42:41
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-09 15:17:36
 * @author: Lin_kangjing
-->
<template>
  <div class="base">
    <h1>subapp</h1>
    <div class="urls">
      <router-link to="/home2">Go to Home2</router-link>
      <br />
      <router-link to="/other2">Go to Other2</router-link>
      <br />
    </div>
    <router-view></router-view>
  </div>
</template>

<script >
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped >
.urls{
  background:#bbb;
}
</style>
