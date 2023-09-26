import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalerieView from "@/views/GalerieView.vue";
import TarifsView from "@/views/TarifsView.vue";
import ContactView from "@/views/ContactView.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/galerie',
    name : 'Galerie',
    component: GalerieView
  },
  {
    path: '/tarifs',
    name: 'Tarifs',
    component: TarifsView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
