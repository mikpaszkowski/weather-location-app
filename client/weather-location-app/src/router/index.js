import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import("../components/Quotes.vue")
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
