import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'
import Login from '@/views/Login/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: Home, meta: { isRecord: true, top: 0 }
  },
  {
    path: '/user', component: User
  },
  {
    path: '/login', component: Login
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.top || 0 }
    }
  }
})
router.beforeEach(
  (to, from, next) => {
    if (to.path === '/user') {
      const token = localStorage.getItem('token')
      if (token) {
        next()
      } else {
        next('login')
      }
    } else {
      next()
    }
  }
)
export default router
