import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Buy from '../views/Buy.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/buy', name: 'Buy', component: Buy },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;