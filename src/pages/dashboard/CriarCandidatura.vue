<template>
  <div class="container">
    <h3>Nova Candidatura</h3>
    <p>Registre uma nova oportunidade de emprego</p>
    <div class="row g-3">
      <div class="col-12 col-md-6 col-lg-12">
        <div class="card h-100 p-4">
          <div class="d-flex align-items-center gap-3 mb-4">
            <span
              class="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold text-primary bg-primary bg-opacity-10"
              style="width: 2rem; height: 2rem">
              1
            </span>
            <h4>Informações da Vaga</h4>
          </div>
          <div>
            <form class="row">
              <div class="col-md-6 mb-3">
                <label for="empresa" class="form-label">Empresa</label>
                <input type="text" v-model="form.empresa" class="form-control" id="empresa" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="cargo" class="form-label">Cargo / Posição</label>
                <input type="text" v-model="form.cargo" class="form-control" id="cargo" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="plataforma" class="form-label">Plataforma</label>
                <select id="plataforma" v-model="form.plataforma_id" class="form-select">
                  <option value="">Selecione...</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="indeed">Indeed</option>
                  <option value="gupy">Gupy</option>
                  <option value="site_empresa">Site da Empresa</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="linkVaga" class="form-label">Link da Vaga</label>
                <input type="url" v-model="form.link_vaga" class="form-control" id="linkVaga" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="tipoTrabalho" class="form-label">Tipo de Trabalho</label>
                <select id="tipoTrabalho" v-model="form.tipo_trabalho" class="form-select">
                  <option value="remoto">Remoto</option>
                  <option value="presencial">Presencial</option>
                  <option value="hibrido">Híbrido</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="localizacao" class="form-label">Localização</label>
                <input type="text" v-model="form.localizacao" class="form-control" id="localizacao" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="nivelVaga" class="form-label">Nível da Vaga</label>
                <select id="nivelVaga" v-model="form.nivel_vaga" class="form-select">
                  <option value="estagio">Estágio</option>
                  <option value="junior">Júnior</option>
                  <option value="pleno">Pleno</option>
                  <option value="senior">Sênior</option>
                  <option value="especialista">Especialista</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="statusVaga" class="form-label">Status</label>
                <select id="statusVaga" v-model="form.status" class="form-select">
                  <option value="aplicado">Aplicado</option>
                  <option value="em_analise">Em análise</option>
                  <option value="triagem">Triagem</option>
                  <option value="teste_tecnico">Teste técnico</option>
                  <option value="entrevista_rh">Entrevista RH</option>
                  <option value="entrevista_tecnica">Entrevista técnica</option>
                  <option value="entrevista_final">Entrevista final</option>
                  <option value="proposta">Proposta</option>
                  <option value="contratado">Contratado</option>
                  <option value="rejeitado">Rejeitado</option>
                  <option value="desistiu">Desistiu</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="salarioMin" class="form-label">Salário Mínimo</label>
                <input type="number" v-model="form.salario_minimo" :disabled="form.salario_a_combinar" class="form-control" id="salarioMin" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="salarioMax" class="form-label">Salário Máximo</label>
                <input type="number" v-model="form.salario_maximo" :disabled="form.salario_a_combinar" class="form-control" id="salarioMax" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="dataAplicacao" class="form-label">Data de Aplicação</label>
                <input type="date" v-model="form.data_aplicacao" class="form-control" id="dataAplicacao" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="dataResposta" class="form-label">Data de Resposta</label>
                <input type="date" v-model="form.data_resposta" class="form-control" id="dataResposta" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="dataEncerramento" class="form-label">Data de Encerramento</label>
                <input type="date" v-model="form.data_encerramento" class="form-control" id="dataEncerramento" />
              </div>
              <div class="col-md-12 mb-3">
                <label for="observacoes" class="form-label">Observações</label>
                <textarea v-model="form.observacoes" class="form-control" id="observacoes" rows="3"
                  placeholder="Notas sobre o processo, impressões, etc."></textarea>
              </div>
              <div class="col-md-12 mb-3">
                <label for="requisitos" class="form-label">Requisitos da Vaga</label>
                <textarea v-model="form.requisitos" class="form-control" id="requisitos" rows="3"
                  placeholder="Requisitos mencionados na descrição da vaga"></textarea>
              </div>
              <div class="col-md-2 mb-3 mt-4 form-check">
                <input type="checkbox" v-model="form.salario_a_combinar" class="form-check-input" id="salarioCombinar" />
                <label class="form-check-label" for="salarioCombinar">Salário a combinar</label>
              </div>
              <div class="col-md-3 mb-3 mt-4 form-check">
                <input type="checkbox" v-model="form.curriculo_visualizado" class="form-check-input" id="curriculoVisualizado" />
                <label class="form-check-label" for="curriculoVisualizado">Currículo visualizado</label>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-12">
        <div class="card h-100 p-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center gap-3">
              <span
                class="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold text-primary bg-primary bg-opacity-10"
                style="width: 2rem; height: 2rem">
                2
              </span>
              <h4>Tecnologias da Vaga</h4>
            </div>
            <div style="color: #3b82f6; cursor: pointer" @click="adicionarTecnologia">
              <Plus :size="18" />
              <span>Adicionar Tecnologia</span>
            </div>
          </div>
          <div>
            <div
              v-if="tecnologias.length === 0"
              class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
              style="border-style: dashed; background-color: #f8fafc">
              <p class="text-secondary mb-1">Nenhuma tecnologia adicionada</p>
              <p class="small text-muted mb-0">
                Clique em "Adicionar Tecnologia" para começar
              </p>
            </div>
            <div
              v-for="(tec, index) in tecnologias"
              :key="index"
              class="row m-4 py-2">
              <div class="col-md-3">
                <label class="form-label">Tecnologia</label>
                <select v-model="tec.nome" class="form-select">
                  <option value="">Selecione uma tecnologia</option>
                  <option value="php">PHP</option>
                  <option value="react">React</option>
                  <option value="typescript">TypeScript</option>
                  <option value="nodejs">Node.js</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="javascript">JavaScript</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Nível</label>
                <select v-model="tec.nivel" class="form-select">
                  <option value="basico">Básico</option>
                  <option value="intermediario">Intermediário</option>
                  <option value="avancado">Avançado</option>
                </select>
              </div>
              <div class="col-md-3 d-flex flex-column">
                <label class="form-label invisible">_</label>
                <div class="d-flex align-items-center" style="height: calc(1.5em + 0.75rem + 2px)">
                  <input
                    type="checkbox"
                    class="form-check-input me-2"
                    v-model="tec.obrigatoria"
                    :id="`obrigatoria-${index}`" />
                  <label class="form-check-label mb-0" :for="`obrigatoria-${index}`">Obrigatória</label>
                </div>
              </div>
              <div class="col-md-1 d-flex flex-column">
                <label class="form-label invisible">_</label>
                <div
                  class="d-flex align-items-center"
                  style="height: calc(1.5em + 0.75rem + 2px); cursor: pointer"
                  @click="removerTecnologia(index)">
                  <X color="#EF4444" :size="18" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botão: fixo na tela enquanto rola, para no fim da página -->
      <div class="col-12 pb-4">
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary px-4 shadow"
            :class="{ 'btn-fixo': !chegouNoFim }"
            @click="cadastrar">
            Cadastrar Candidatura
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { Plus, X } from "lucide-vue-next";

const form = ref({
  empresa: "",
  cargo: "",
  plataforma_id: null,
  link_vaga: "",
  tipo_trabalho: "remoto",
  localizacao: "",
  nivel_vaga: "junior",
  status: "aplicado",
  salario_minimo: null,
  salario_maximo: null,
  salario_a_combinar: false,
  curriculo_visualizado: false,
  data_aplicacao: "",
  data_resposta: "",
  data_encerramento: "",
  observacoes: "",
  requisitos: "",
})

watch(() => form.value.salario_a_combinar, (valor) => {
  if (valor) {
    form.value.salario_minimo = null
    form.value.salario_maximo = null
  }
})

const tecnologias = ref<{ nome: string; nivel: string; obrigatoria: boolean }[]>([]);

function adicionarTecnologia() {
  tecnologias.value.push({ nome: "", nivel: "basico", obrigatoria: false });
}

function removerTecnologia(index: number) {
  tecnologias.value.splice(index, 1);
}

function cadastrar() {
  console.log("form:", form.value)
  console.log("tecnologias:", tecnologias.value)
}

const chegouNoFim = ref(false)

function verificarScroll() {
  const distanciaDoFim = document.documentElement.scrollHeight - window.scrollY - window.innerHeight
  chegouNoFim.value = distanciaDoFim < 80
}

onMounted(() => window.addEventListener('scroll', verificarScroll))
onUnmounted(() => window.removeEventListener('scroll', verificarScroll))
</script>

<style scoped>
.btn-fixo {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 100;
}
</style>