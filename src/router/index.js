import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SigninPage from '../views/SigninPage.vue'
import SignupPage from '../views/SignupPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    }
  ]
})

export default router
