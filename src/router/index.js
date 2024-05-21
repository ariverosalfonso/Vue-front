import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignOut from '../views/admin/signout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/members/view.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/admin/login.vue')
    },
    {
      path: '/signout',
      name: 'signOut',
      component: SignOut
    },
  ]
})

export default router
