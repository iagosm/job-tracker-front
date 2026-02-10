import { createRouter, createWebHistory } from 'vue-router'

// Public
import Landing from '@/pages/public/Landing.vue'
import NotFound from '@/pages/public/NotFound.vue'

// Auth
import Login from '@/pages/auth/Login.vue'

// Dashboard
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Home from '@/pages/dashboard/Home.vue'
import Candidaturas from '@/pages/dashboard/Candidaturas.vue'
import CriarCandidatura from '@/pages/dashboard/CriarCandidatura.vue'
import Analytics from '@/pages/dashboard/Analytics.vue'
import Perfil from '@/pages/dashboard/Perfil.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // PÚBLICAS
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/dashboard',
      component: DashboardLayout,
      meta: { requiresAuth: true },
      redirect: '/dashboard',
      children: [
        {
          path: '',
          name: 'DashboardHome',
          component: Home
        },
        {
          path: 'candidaturas',
          name: 'Candidaturas',
          component: Candidaturas
        },
        {
          path: 'criar_candidaturas',
          name: 'Criar Candidaturas',
          component: CriarCandidatura
        },
        {
          path: 'analytics',
          name: 'Analytics',
          component: Analytics
        },
        {
          path: 'perfil',
          name: 'Perfil',
          component: Perfil
        }
      ]
    },

    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

/**
 * GUARD GLOBAL
 */
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  // 🚫 NÃO LOGADO tentando acessar rota privada
  if (to.meta.requiresAuth && !token) {
    return next('/login')
  }

  // 🚫 LOGADO tentando acessar login
  if (to.path === '/login' && token) {
    return next('/dashboard')
  }

  next()
})

export default router