<!--
 * @Description: 
 * @FilePath: \subapp\src\App.vue
 * @Date: 2022-11-07 16:00:32
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-09 09:12:34
 * @author: Lin_kangjing
-->
<template>
  <div id="app">
    this is subapp
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
  }
}
</script>

<style>
#DTSMv3{
  background-color:yellow;
  height:400px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
