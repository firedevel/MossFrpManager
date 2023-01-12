import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: () => import('../views/Overview.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },    {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/node',
      name: 'node',
      component: () => import('../views/Node.vue')
    },
    {
      path: '/create/:node',
      name: 'create',
      props: true,
      component: () => import('../views/Create.vue')
    },
    {
      path: '/manage/:id',
      name: 'manage',
      props: true,
      component: () => import('../views/Manage.vue')
    },
  ]
})

export default router
