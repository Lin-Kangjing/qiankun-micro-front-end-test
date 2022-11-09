<!--
 * @Description: 
 * @FilePath: \micro-front-end\src\views\base.vue
 * @Date: 2022-11-07 16:42:41
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-09 15:23:47
 * @author: Lin_kangjing
-->
<template>
  <div class="base">
    <div class="header">micro front end</div>
    <div class="container">
      <div class="side">
        <router-link to="/home">Go to Home</router-link>
        <br />
        <router-link to="/other">Go to Other</router-link>
        <br />
        <router-link to="/subapp">Go to subapp</router-link>
      </div>
      <div class="main">
          <router-view></router-view>
      </div>
    </div>
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

<style scoped lang="less" >
.base {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 40px;
    text-align: center;
    background: #eee;
  }
  .container {
    flex: 1 1 auto;
    display: flex;
    .side {
      flex: 0 0 200px;
      padding: 20px;
      background: #ddd;
    }
    .main {
      flex: 1 1 auto;
      padding: 20px;
      background: #ccc;
    }
  }
}
</style>
