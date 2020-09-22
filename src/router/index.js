import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import Page404 from '@/views/404.vue'
import PwdSetting from '@/views/PwdSetting.vue'
import Transfer from '@/views/Transfer.vue'
import OrderQuery from '@/views/OrderQuery.vue'
import TradeQuery from '@/views/TradeQuery.vue'
import HisOrderQuery from '@/views/HisOrderQuery.vue'
import HisTradeQuery from '@/views/HisTradeQuery.vue'
import Buy from '@/views/Buy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/pwdsetting',
        name: 'PwdSetting',
        component: PwdSetting,
        // meta: {requireAuth: true}
      },
      {
        path: '/transfer',
        name: 'Transfer',
        component: Transfer,
        // meta: {requireAuth: true}
      },
      {
        path: '/orderquery',
        name: 'OrderQuery',
        component: OrderQuery,
        // meta: {requireAuth: true}
      },
      {
        path: '/tradequery',
        name: 'TradeQuery',
        component: TradeQuery,
        // meta: {requireAuth: true}
      },
      {
        path: '/hisorderquery',
        name: 'HisOrderQuery',
        component: HisOrderQuery,
        // meta: {requireAuth: true}
      },
      {
        path: '/histradequery',
        name: 'HisTradeQuery',
        component: HisTradeQuery,
        // meta: {requireAuth: true}
      },
      {
        path: '/buy',
        name: 'Buy',
        component: Buy,
        // meta: {requireAuth: true}
      },
    ]
  },
  {
    path: '/404',
    name: '404',
    component: Page404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// route interceptor
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (Boolean(sessionStorage.getItem("uid"))) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})
export default router
