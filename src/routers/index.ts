import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]
export const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes// 路由规则
})
