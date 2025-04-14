import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/order', name: 'Order', component: Order },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:catchAll(.*)', name: 'Not-Found', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
