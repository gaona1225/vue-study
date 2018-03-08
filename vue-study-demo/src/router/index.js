import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterTest from '@/components/RouterTest'
import Demo from '@/components/Demo'
import Todo from '@/todo/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/router-test',
      name: 'RouterTest',
      component: RouterTest
    }
  ]
})
