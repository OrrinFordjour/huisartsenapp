import { createRouter, createWebHistory } from '@ionic/vue-router';

import Tabs from '../views/Tabs.vue'
import Login from '../pages/Login.vue'
import SignPage from '../pages/SignPage.vue'
import ChatWindow from '../views/ChatWindow.vue'
import ProfielPage from '../pages/ProfielPage.vue'
import HelpPage from '../pages/HelpPage.vue'
import firebase from 'firebase'


const routes = [
  {
    path: '/',
    component: Login,
    name: 'login',
  },
  {
    path: '/signup',
    component: SignPage,
    name: 'signup',
  },
  {
    path: '/profiel',
    component: ProfielPage,
    name: 'profiel',
  },{
    path: '/help',
    component: HelpPage,
    name: 'help',
  },
  {
    path: '/tab1/:id',
    component: () => import('@/views/NieuwsDetails.vue')
  },
  {
    path: '/chatwindow',
    name: 'ChatWindow',
    component: ChatWindow,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next()
      } else {
        next({ name: 'chat' })
      }
    }
  },
  {
    path: '/tabs/',
    component: Tabs,
    /*     meta: {
          requiresAuth: true
        }, */
    children: [

      {
        path: 'tab1',
        name: 'tab1',
        /*         meta: {
                  requiresAuth: true
                }, */

        component: () => import('@/views/BloedOnderzoekPage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/VerWijzingPage.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/MedicijnenPage.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/ConsultPage.vue')
      },
      {
        path: 'tab5',
        name: 'tab5',
        component: () => import('@/views/ChatPage.vue')
      }
      ,
      {
        path: 'tab6',
        component: () => import('@/views/SpoedAlarm.vue')
      },
      {
        path: 'tab7',
        component: () => import('@/views/Homepage.vue')
      },


    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser
    if (user) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
