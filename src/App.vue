<!--
 * @Description: 
 * @FilePath: \micro-front-end\src\App.vue
 * @Date: 2022-11-07 15:57:53
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-10 14:44:14
 * @author: Lin_kangjing
-->
<template>
  <div id="app">
    {{loading}}
    <h1 v-if="loading">loading</h1>
    <div v-show="$route.matched.length" id="DTSMv3">
      <router-view />
    </div>
    <div v-show="!$route.matched.length" id="subApp"></div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  props:{
  loading:{
    type:Boolean,
    default:false
  }
 },
  components: {},
  data(){
    return{
    }
  },
  watch:{
  }
};
</script>

<style>
#DTSMv3 {
  height: 90vh;
  width: 90vw;
}
</style>
