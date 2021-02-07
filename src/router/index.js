import { createRouter, createWebHistory } from 'vue-router'
import Deeplink from '../views/Deeplink.vue'

const routes = [
  { path: '/:pathMatch(.*)*', name: 'wildcard', component: Deeplink }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
