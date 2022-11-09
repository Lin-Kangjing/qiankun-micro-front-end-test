<!--
 * @Description: 
 * @FilePath: \subapp\src\views\base.vue
 * @Date: 2022-11-07 16:42:41
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-08 14:56:13
 * @author: Lin_kangjing
-->
<template>
  <div class="base">
    <h1>subapp</h1>
    <div class="urls">
      <router-link to="/home">Go to Home</router-link>
      <br />
      <router-link to="/other">Go to Other</router-link>
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
