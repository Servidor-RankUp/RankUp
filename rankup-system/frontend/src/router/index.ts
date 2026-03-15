import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showInMenu: true },
  },
  {
    path: '/shop',
    name: 'Loja',
    component: () => import('@/pages/Shop.vue'),
    meta: { showInMenu: true },
  },
  {
    path: '/ranks',
    name: 'Ranks',
    component: () => import('@/pages/Ranks.vue'),
    meta: { showInMenu: true },
  },
  {
    path: '/support',
    name: 'Suporte',
    component: () => import('@/pages/Support.vue'),
    meta: { showInMenu: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: { showInMenu: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
