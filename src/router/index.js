import { createRouter, createWebHistory } from '@ionic/vue-router';

import Tabs from '../views/Tabs.vue'
import Login from '../pages/Login.vue'
import SignPage from '../pages/SignPage.vue'
import ChatWindow from '../views/ChatWindow.vue'


const routes= [
  {
    path: '/',
    component: Login,
    name: 'login',
  },
  {
    path: '/signup',
    component: SignPage,
    name: 'signpage',
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
    children: [

      {
        path: 'tab1',
        component: () => import('@/views/Homepage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/BloedOnderzoekPage.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/VerWijzingPage.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/MedicijnenPage.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/ConsultPage.vue')
      }
      ,
      {
        path: 'tab6',
        component: () => import('@/views/ChatPage.vue'),
        children: []
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
