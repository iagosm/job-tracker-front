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
      <li class="nav-item">
        <a class="nav-link text-white active" href="#">
          <ActivityIcon class="me-2" /> Dashboard
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">
          <BarChart2Icon class="me-2" /> Métricas
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">
          <UserCheckIcon class="me-2" /> Candidaturas
        </a>
      </li>
    </ul>
    </aside>

    <!-- CONTEÚDO -->
    <div class="flex-grow-1 min-vh-100 bg-light">
      <!-- NAVBAR -->
      <nav class="navbar navbar-expand bg-white shadow-sm px-3">
        <!-- Toggle sidebar -->
        <button class="btn btn-outline-primary me-3" @click="toggleSidebar">
          ☰
        </button>

        <!-- Espaço -->
        <div class="flex-grow-1"></div>

        <!-- USUÁRIO (Bootstrap Dropdown) -->
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <!-- Avatar + status online -->
            <span class="position-relative me-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="user"
                width="40"
                height="40"
                class="rounded-circle"
              />
              <span
                class="position-absolute bottom-0 end-0 p-1 bg-success border border-white rounded-circle"
              ></span>
            </span>

            <strong class="d-none d-md-inline">
              João Silva
            </strong>
          </a>

          <ul class="dropdown-menu dropdown-menu-end shadow">
            <li>
              <a class="dropdown-item" href="#">👤 Perfil</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">⚙️ Configurações</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item text-danger" href="#">🚪 Sair</a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- CONTEÚDO PRINCIPAL -->
      <main class="container-fluid p-4">

        <div class="row g-3">
          <div class="col-md-4">
            <div class="card shadow-sm">
              <div class="card-body">
                Card 1
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm">
              <div class="card-body">
                Card 2
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm">
              <div class="card-body">
                Card 3
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ActivityIcon,
  BarChart2Icon,
  UserCheckIcon
} from 'lucide-vue-next'
const sidebarOpen = ref(true)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
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

.nav-pills .nav-link {
  border-radius: 0.375rem;
}

.nav-pills .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
