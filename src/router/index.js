import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'

Vue.use(Router)

export default new Router({
  mode: +'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true
    }
  ]
})
