import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/Accueil.vue')
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: () => import('../views/Catalogue.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/sav',
    name: 'Service Apres Vente',
    component: () => import('../views/Sav.vue')
  },
  {
    path: '/media',
    name: 'Medias',
    component: () => import('../views/Media.vue')
  },
  {
    path: '/categorie:cat',
    name: 'Categorie',
    component: () => import('../views/Categorie.vue')
  },
  
  {
    path: '/pg/:idJeu',
    name: 'Jeu',
    component: () => import('../views/pageGonflable.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
