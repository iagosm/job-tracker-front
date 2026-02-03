<template>
  <div class="d-flex">
    <!-- SIDEBAR -->
    <aside
      class="bg-dark text-white sidebar d-flex flex-column"
      :class="{ 'sidebar-closed': !sidebarOpen }"
    >
      <div class="p-3 border-bottom border-secondary fw-bold fs-5">
        🚀 Job Tracker
      </div>

      <ul class="nav nav-pills flex-column p-3 gap-1">
        <!-- DASHBOARD (rota pai) -->
        <li class="nav-item">
          <RouterLink
            to="/dashboard"
            class="nav-link text-white"
            exact-active-class="active"
          >
            <ActivityIcon class="me-2" />
            Dashboard
          </RouterLink>
        </li>

        <!-- MÉTRICAS -->
        <li class="nav-item">
          <RouterLink
            to="/dashboard/analytics"
            class="nav-link text-white"
            active-class="active"
          >
            <BarChart2Icon class="me-2" />
            Métricas
          </RouterLink>
        </li>

        <!-- CANDIDATURAS -->
        <li class="nav-item">
          <RouterLink
            to="/dashboard/candidaturas"
            class="nav-link text-white"
            active-class="active"
          >
            <UserCheckIcon class="me-2" />
            Candidaturas
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/dashboard/perfil"
            class="nav-link text-white"
            active-class="active"
          >
            <User class="me-2" />
            Perfil
          </RouterLink>
        </li>
      </ul>
    </aside>
    <div class="flex-grow-1 min-vh-100 bg-light">
      <nav class="navbar navbar-expand bg-white shadow-sm px-3">
        <button class="btn btn-outline-primary me-3" @click="toggleSidebar">
          ☰
        </button>
        <div class="flex-grow-1"></div>
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              width="40"
              height="40"
              class="rounded-circle me-2"
            />
            <strong>João Silva</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-end shadow">
            <li>
              <RouterLink class="dropdown-item" to="/dashboard/perfil">
                👤 Perfil
              </RouterLink>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <button
              class="dropdown-item text-danger"
              @click="logout"
            >
              🚪 Sair
            </button>

          </ul>
        </div>
      </nav>
      <main class="container-fluid p-4">
        <RouterView />
      </main>
    </div>
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
</style>
