import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Next from '@/pages/next'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/next',
      name: 'Next',
      component: Next
    }
  ]
})
