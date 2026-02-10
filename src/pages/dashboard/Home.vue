<template>
  <div class="container-main">
    <h3>Dashboard</h3>
    <p>Acompanhe suas candidaturas em tempo real</p>
    <div class="row g-3">

      <!-- Total de Vagas -->
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card h-100">
          <div class="card-body d-flex flex-column align-items-center gap-2">
            <div class="d-flex align-items-center justify-content-center rounded mb-2"
              style="width: 44px; height: 44px; background-color: #3B82F6;">
              <Briefcase class="text-white" />
            </div>
            <p class="card-text fw-bold mb-0">R$ 12.000</p>
            <p class="card-title mb-0 text-center">Total de Candidaturas</p>
          </div>
        </div>
      </div>

      <!-- Em Andamento -->
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card h-100">
          <div class="card-body d-flex flex-column align-items-center gap-2">

            <div class="d-flex align-items-center justify-content-center rounded mb-2"
              style="width: 44px; height: 44px; background-color: #EAB308;">

              <Clock class="text-white" />
            </div>
            <p class="card-text fw-bold mb-0">320</p>
            <p class="card-title mb-0 text-center">Em Andamento</p>
          </div>
        </div>
      </div>

      <!-- Entrevistas -->
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card h-100">
          <div class="card-body d-flex flex-column align-items-center gap-2">

            <div class="d-flex align-items-center justify-content-center rounded mb-2"
              style="width: 44px; height: 44px; background-color: #A855F7;">
              <TrendingUp class="text-white" />
            </div>
            <p class="card-text fw-bold mb-0">89</p>
            <p class="card-title mb-0 text-center">Entrevistas</p>
          </div>
        </div>
      </div>

      <!-- Aprovação -->
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card h-100">
          <div class="card-body d-flex flex-column align-items-center gap-2">

            <div class="d-flex align-items-center justify-content-center rounded mb-2"
              style="width: 44px; height: 44px; background-color: #22C55E;">
              <CheckCircle class="text-white" />
            </div>
            <p class="card-text fw-bold mb-0">2.1%</p>
            <p class="card-title mb-0 text-center">Aprovação</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card h-100">
          <div class="card-body d-flex flex-column align-items-center gap-2">

            <div class="d-flex align-items-center justify-content-center rounded mb-2"
              style="width: 44px; height: 44px; background-color: #EF4444;">
              <XCircle class="text-white" />
            </div>
            <p class="card-text fw-bold mb-0">2.1%</p>
            <p class="card-title mb-0 text-center">Rejeitado</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-2">
        <div class="card h-100">
          <div class="card-body d-flex flex-column align-items-center gap-2">

            <div class="d-flex align-items-center justify-content-center rounded mb-2"
              style="width: 44px; height: 44px; background-color: #6366F1;">
              <BarChart2 class="text-white" />
            </div>

            <p class="card-text fw-bold mb-0">2.1%</p>
            <p class="card-title mb-0 text-center">Taxa de Sucesso</p>

          </div>
        </div>
      </div>


      <!-- Funil de Candidaturas -->
      <div class="col-12 col-md-6 col-lg-6">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title mb-4">Funil de Candidaturas</h5>
            <div class="mb-2">
              <div class="d-flex justify-content-between">
                <span>Aplicadas</span>
                <span>48 vagas (100%)</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 100%;">100%</div>
              </div>
            </div>
            <div class="mb-2">
              <div class="d-flex justify-content-between">
                <span>Triagem</span>
                <span>28 vagas (58%)</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-info" role="progressbar" style="width: 58%;">58%</div>
              </div>
            </div>
            <div class="mb-2">
              <div class="d-flex justify-content-between">
                <span>Entrevista</span>
                <span>12 vagas (25%)</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 25%;">25%</div>
              </div>
            </div>
            <div class="mb-2">
              <div class="d-flex justify-content-between">
                <span>Aprovadas</span>
                <span>3 vagas (6%)</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: 6%;">6%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Distruibuição por Status -->
      <!--  -->
      <div class="col-12 col-md-6 col-lg-6">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title mb-4">Distribuição por Status</h5>
            <div class="d-flex justify-content-between p-2 mb-2 rounded-2 bg-warning bg-opacity-10">
              <div class="d-flex justify-content-between align-items-center gap-3">
                <span class="bg-warning rounded" style="width:0.75rem;height:0.75rem;"></span>
                <div>Em Andamento</div>
              </div>
              <div>25%</div>
            </div>
            <div class="d-flex justify-content-between p-2 mb-2 rounded-2 bg-success bg-opacity-10">
              <div class="d-flex justify-content-between align-items-center gap-3">
                <span class="bg-success rounded" style="width:0.75rem;height:0.75rem;"></span>
                <div>Pendente</div>
              </div>
              <div>35%</div>
            </div>
            <div class="d-flex justify-content-between p-2 mb-2 rounded-2 bg-danger bg-opacity-10">
              <div class="d-flex justify-content-between align-items-center gap-3">
                <span class="bg-danger rounded" style="width:0.75rem;height:0.75rem;"></span>
                <div>Rejeitadas</div>
              </div>
              <div>31%</div>
            </div>
            <div class="d-flex justify-content-between p-2 mb-2 rounded-2 bg-info bg-opacity-10">
              <div class="d-flex justify-content-between align-items-center gap-3">
                <span class="bg-info rounded" style="width:0.75rem;height:0.75rem;"></span>
                <div>Aprovadas</div>
              </div>
              <div>9%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Candidaturas Recentes -->
      <div class="col-12 col-md-12 col-lg-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="card-title d-flex mb-4 justify-content-between">
              <h5>Candidaturas Recentes</h5>
              <router-link to="/dashboard/candidaturas" class="text-decoration-none">
                Ver todas
              </router-link>
            </div>
            <div class="d-flex align-items-center mb-3 p-2 border-top border-bottom">
              <div class="d-flex align-items-center justify-content-center bg-secondary rounded me-3"
                style="width: 48px; height: 48px; background-color: #374151;">
                <Building2 color="#e5e7eb" /> <!-- cinza similar ao slate-400 -->
              </div>
              <div class="flex-grow-1">
                <div class="fw-bold">Senior Frontend Developer</div>
                <div class="text-muted">Tech Corp - LinkedIn</div>
              </div>
              <div class="d-flex flex-column gap-2">
                <span class="badge bg-warning text-dark">Pendente</span>
                <span>30/06/2023</span>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3 p-2 border-top border-bottom">
              <div class="d-flex align-items-center justify-content-center bg-secondary rounded me-3"
                style="width: 48px; height: 48px; background-color: #374151;">
                <Building2 color="#e5e7eb" /> <!-- cinza similar ao slate-400 -->
              </div>
              <div class="flex-grow-1">
                <div class="fw-bold">Backend Developer</div>
                <div class="text-muted">Soft Solutions - Indeed</div>
              </div>
              <div class="d-flex flex-column gap-2">
                <span class="badge bg-success">Aprovado</span>
                <span>30/06/2023</span>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3 p-2 border-top border-bottom">
              <div class="d-flex align-items-center justify-content-center bg-secondary rounded me-3"
                style="width: 48px; height: 48px; background-color: #374151;">
                <Building2 color="#e5e7eb" /> <!-- cinza similar ao slate-400 -->
              </div>
              <div class="flex-grow-1">
                <div class="fw-bold">Backend Developer</div>
                <div class="text-muted">Soft Solutions - Indeed</div>
              </div>
              <div class="d-flex flex-column gap-2">
                <span class="badge bg-danger">Rejeitado</span>
                <span>30/06/2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  Briefcase,
  Clock,
  TrendingUp,
  CheckCircle,
  XCircle,
  BarChart2, Building2
} from 'lucide-vue-next';
</script>