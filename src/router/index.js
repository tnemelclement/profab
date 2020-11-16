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
    component: () => import('../views/Catalogue.vue'),
    children: [
      {
        path: '',
        name: 'NavCatalogue',
        component: () => import('../views/NavCatalogue.vue')
      },
      {
        path: ':cat',
        name: 'Categorie',
        component: () => import('../views/Categorie.vue')
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/sav',
    name: 'Sav',
    component: () => import('../views/Sav.vue')
  },
  {
    path: '/media',
    name: 'Medias',
    component: () => import('../views/Media.vue')
  },
  {
    path: '/enstock',
    name: 'En Stock',
    component: () => import('../views/EnStock.vue')
  },
  {
    path: '/gonflable/:id',
    name: 'PageGonflable',
    component: () => import('../views/pageGonflable.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
