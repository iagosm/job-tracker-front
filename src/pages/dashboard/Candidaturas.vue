<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-1">
      <div>
        <h3 class="mb-0">Candidaturas</h3>
        <p class="text-muted mb-0">Gerencie todas as suas candidaturas</p>
      </div>
      <button class="btn btn-primary">
        <Plus :size="16" class="me-1" />
        Nova Candidatura
      </button>
    </div>

    <div class="card mt-3">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr>
                <th scope="col" class="ps-3">#</th>
                <th scope="col">Cargo</th>
                <th scope="col">Empresa</th>
                <th scope="col">Plataforma</th>
                <th scope="col">Tipo</th>
                <th scope="col">Nível</th>
                <th scope="col">Status</th>
                <th scope="col">Data</th>
                <th scope="col">Salário</th>
                <th scope="col" class="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ps-3 text-muted small">1</td>
                <td class="fw-medium">Desenvolvedor Frontend</td>
                <td>Empresa X</td>
                <td>
                  <span class="badge text-bg-light border">LinkedIn</span>
                </td>
                <td>
                  <span class="badge text-bg-info bg-opacity-10 text-info border border-info border-opacity-25">Remoto</span>
                </td>
                <td>
                  <span class="badge text-bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25">Pleno</span>
                </td>
                <td>
                  <span class="badge text-bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25">Em análise</span>
                </td>
                <td class="text-muted small">12/05/2025</td>
                <td class="text-muted small">R$ 5.000</td>
                <td>
                  <div class="d-flex justify-content-center gap-1">
                    <button class="btn btn-sm btn-outline-primary" title="Visualizar">
                      <Eye :size="14" />
                    </button>
                    <button class="btn btn-sm btn-outline-warning" title="Editar">
                      <Pencil :size="14" />
                    </button>
                    <button class="btn btn-sm btn-outline-danger" title="Excluir">
                      <Trash2 :size="14" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="ps-3 text-muted small">2</td>
                <td class="fw-medium">Desenvolvedor Backend</td>
                <td>Empresa Y</td>
                <td>
                  <span class="badge text-bg-light border">Gupy</span>
                </td>
                <td>
                  <span class="badge text-bg-info bg-opacity-10 text-info border border-info border-opacity-25">Híbrido</span>
                </td>
                <td>
                  <span class="badge text-bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25">Sênior</span>
                </td>
                <td>
                  <span class="badge text-bg-success bg-opacity-10 text-success border border-success border-opacity-25">Entrevista</span>
                </td>
                <td class="text-muted small">10/05/2025</td>
                <td class="text-muted small">R$ 8.000</td>
                <td>
                  <div class="d-flex justify-content-center gap-1">
                    <button class="btn btn-sm btn-outline-primary" title="Visualizar">
                      <Eye :size="14" />
                    </button>
                    <button class="btn btn-sm btn-outline-warning" title="Editar">
                      <Pencil :size="14" />
                    </button>
                    <button class="btn btn-sm btn-outline-danger" title="Excluir">
                      <Trash2 :size="14" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="ps-3 text-muted small">3</td>
                <td class="fw-medium">Fullstack Developer</td>
                <td>Empresa Z</td>
                <td>
                  <span class="badge text-bg-light border">Indeed</span>
                </td>
                <td>
                  <span class="badge text-bg-info bg-opacity-10 text-info border border-info border-opacity-25">Presencial</span>
                </td>
                <td>
                  <span class="badge text-bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25">Júnior</span>
                </td>
                <td>
                  <span class="badge text-bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25">Rejeitado</span>
                </td>
                <td class="text-muted small">08/05/2025</td>
                <td class="text-muted small">R$ 4.000</td>
                <td>
                  <div class="d-flex justify-content-center gap-1">
                    <button class="btn btn-sm btn-outline-primary" title="Visualizar">
                      <Eye :size="14" />
                    </button>
                    <button class="btn btn-sm btn-outline-warning" title="Editar">
                      <Pencil :size="14" />
                    </button>
                    <button class="btn btn-sm btn-outline-danger" title="Excluir">
                      <Trash2 :size="14" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Eye, Pencil, Trash2, Plus } from "lucide-vue-next";
</script>