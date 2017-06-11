import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',//url路径
      name: 'test',//随便起个名字，没有映射
      component: test//这个主见由import沟通起来
    },
    {
      path: '/',//url路径
      name: 'Hello',//随便起个名字，没有映射
      component: Hello//这个主见由import沟通起来
    }
  ]
})
