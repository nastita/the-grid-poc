import { createRouter, createWebHistory } from 'vue-router'
import TheGrid from '../views/TheGrid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheGrid
    },
    {
      path: '/:username',
      name: 'the-grid',
      component: TheGrid
    },
  ]
})

export default router
