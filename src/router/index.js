import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User/User.vue')
      },
      {
        path: '/mail',
        name: 'mail',
        component: () => import('@/views/mail/index.vue')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/Other/pageOne.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/Other/pageTwo.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
