import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ThreadShow from '@/components/ThreadShow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    }
  ]
})
