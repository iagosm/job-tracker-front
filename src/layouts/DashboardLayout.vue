<template>
  <div class="d-flex">
    <!-- SIDEBAR -->
    <aside
      class="sidebar d-flex flex-column"
      style="background-color: #FFFFFF"
      :class="{ 'sidebar-closed': !sidebarOpen }"
    >
      <div class="p-4 border-bottom">
        <div class="d-flex align-items-center gap-2">
          <div class="d-flex align-items-center justify-content-center rounded"
            style="width: 40px; height: 40px; background-color: #0d6efd;"
          >
            <ActivityIcon class="text-white" />
          </div>
          <div>
            <h6 class="mb-0 fw-bold">JobTracker</h6>
            <small class="text-secondary">Gestão de Vagas</small>
          </div>
        </div>
      </div>

      <ul class="nav nav-pills flex-column p-3 gap-1" id="sidebarItens">
        <li class="nav-item">
          <RouterLink
            to="/dashboard"
            class="nav-link"
            exact-active-class="active"
          >
            <ActivityIcon class="me-2" />
            Dashboard
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/dashboard/analytics"
            class="nav-link"
            active-class="active"
          >
            <BarChart2Icon class="me-2" />
            Métricas
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/dashboard/candidaturas"
            class="nav-link"
            active-class="active"
          >
            <UserCheckIcon class="me-2" />
            Candidaturas
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/dashboard/criar_candidaturas"
            class="nav-link"
            active-class="active"
          >
            <UserCheckIcon class="me-2" />
            Criar Candidaturas
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/dashboard/perfil"
            class="nav-link"
            active-class="active"
          >
            <User class="me-2" />
            Perfil
          </RouterLink>
        </li>
      </ul>
      <div id="logoutBtn" class="mt-auto p-4 border-top w-100 d-flex  gap-2" @click="logout">
        <LogOut />
        <span>Sair</span>
      </div>
    </aside>
    <main class="container-fluid p-4" style="background-color: #F8FAFC;">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'
import {
  ActivityIcon,
  BarChart2Icon,
  UserCheckIcon,
  User,
  LogOut,
} from 'lucide-vue-next'

const sidebarOpen = ref(true)
const router = useRouter();

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.replace('/login')
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
}

.sidebar-closed {
  margin-left: -250px;
}

/* #sidebarItens .nav-link.active { */
#sidebarItens .nav-link {
  color: #334155;
}
#sidebarItens .nav-link.active {
  color: #2563EB;
  background-color: #EFF6FF;
}
#sidebarItens .nav-link:hover:not(.active) {
  background-color: #F8FAF6;
}

#logoutBtn:hover {
  cursor: pointer;
  background-color: #F8FAF6;
}
</style>

<!-- <LogOut  @click="logout"/> <span>Sair</span> -->

<!-- color nav active rgb(37 99 235 / var(1, 1)) -->
 <!-- hover = rgb(248 250 252 / var(1, 1)); -->

 <!-- texto /* color: rgb(51 65 85 / var(--tw-text-opacity, 1)); -->