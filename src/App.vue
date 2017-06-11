<template>
  <div id="app">
    <h2>我是导航条</h2>
    <h4><router-link to="/test">点我跳到test页面</router-link></h4>
    <h4><router-link to="/">点我跳到home页面</router-link></h4>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <test></test>
  </div>
</template>

<script>
  import Test from './components/need'

export default {
  name: 'app',//随便七个名字便于区分
  components:{
      Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
