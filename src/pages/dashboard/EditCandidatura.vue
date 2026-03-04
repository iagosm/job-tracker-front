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
                <label for="exampleInputEmail1" class="form-label">Empresa</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Cargo / Posição</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Plataforma</label>
                <select id="inputState" class="form-select">
                  <option value="">Selecione...</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="indeed">Indeed</option>
                  <option value="gupy">Gupy</option>
                  <option value="site_empresa">Site da Empresa</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Link da Vaga</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Tipo de Trabalho</label>
                <select id="inputState" class="form-select">
                  <option value="remoto">Remoto</option>
                  <option value="presencial">Presencial</option>
                  <option value="hibrido">Híbrido</option>
                  <option value="senior">Sênior</option>
                  <option value="especialista">Especialista</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Localização</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Nível da Vaga</label>
                <select id="inputState" class="form-select">
                  <option value="estagio">Estágio</option>
                  <option value="junior">Júnior</option>
                  <option value="pleno">Pleno</option>
                  <option value="senior">Sênior</option>
                  <option value="especialista">Especialista</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Status</label>
                <select id="inputState" class="form-select">
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
                <label for="exampleInputPassword1" class="form-label">Salário Mínimo</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Salário Máximo</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Data de Aplicação</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Data de Resposta</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Data de Encerramento</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>

              <div class="col-md-12 mb-3">
                <label for="observacoes" class="form-label">Observações</label>
                <textarea class="form-control" id="observacoes" rows="3"
                  placeholder="Notas sobre o processo, impressões, etc."></textarea>
              </div>


              <div class="col-md-12 mb-3">
                <label for="requisitos" class="form-label">Requisitos da Vaga</label>
                <textarea class="form-control" id="requisitos" rows="3"
                  placeholder="Requisitos mencionados na descrição da vaga"></textarea>
              </div>
              <div class="col-md-2 mb-3 mt-4 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Salário a combinar</label>
              </div>
              <div class="col-md-3 mb-3 mt-4 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck2" />
                <label class="form-check-label" for="exampleCheck2">Currículo visualizado</label>
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
            <div style="color: #3b82f6">
              <Plus :size="18" />
              <span>Adicionar Tecnologia</span>
            </div>
          </div>
          <div>
            <div v-if="mostrarTecnologia"
              class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
              style="border-style: dashed; background-color: #f8fafc">
              <p class="text-secondary mb-1">Nenhuma tecnologia adicionada</p>
              <p class="small text-muted mb-0">
                Clique em "Adicionar Tecnologia" para começar
              </p>
            </div>
            <div class="row m-4 py-5">
              <div class="col-md-3">
                <label for="inputStatus" class="form-label">Status</label>
                <select id="inputStatus" class="form-select">
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
                <label for="inputNivel" class="form-label">Nível</label>
                <select id="inputNivel" class="form-select">
                  <option value="basico">Básico</option>
                  <option value="intermediario">Intermédiario</option>
                  <option value="avancado">Avançado</option>
                </select>
              </div>
              <div class="col-md-3 d-flex flex-column">
                <label class="form-label invisible">_</label> <!-- espaçador -->
                <div class="d-flex align-items-center" style="height: calc(1.5em + 0.75rem + 2px)">
                  <input type="checkbox" class="form-check-input me-2" id="curriculoVisualizado" />
                  <label class="form-check-label mb-0" for="curriculoVisualizado">Obrigatória</label>
                </div>
              </div>

              <div class="col-md-1 d-flex flex-column">
                <label class="form-label invisible">_</label> <!-- espaçador -->
                <div class="d-flex align-items-center" style="height: calc(1.5em + 0.75rem + 2px)">
                  <X color="#EF4444" :size="18" />
                </div>
              </div>
            </div>

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
                3
              </span>
              <h4>Etapas do Processo Seletivo</h4>
            </div>
            <div style="color: #3b82f6">
              <Plus :size="18" />
              <span>Adicionar Etapa</span>
            </div>
          </div>
          <div>
            <div v-if="mostrarEtapas"
              class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
              style="border-style: dashed; background-color: #f8fafc">
              <p class="text-secondary mb-1">Nenhuma etapa registrado</p>
              <p class="small text-muted mb-0">
                Adicione etapas do processo seletivo
              </p>
            </div>
            <form class="row m-4 py-5">
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Tipo de Etapa</label>
                <select id="inputState" class="form-select">
                  <option value="triagem">Triagem</option>
                  <option value="teste_tecnico">Teste Técnico</option>
                  <option value="teste_pratico">Teste Prático</option>
                  <option value="entrevista_rh">Entrevista RH</option>
                  <option value="entrevista_tecnica">Entrevista Técnica</option>
                  <option value="entrevista_gestor">Entrevista Gestor</option>
                  <option value="entrevista_final">Entrevista Final</option>
                  <option value="proposta">Proposta</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Título</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Status</label>
                <select id="inputState" class="form-select">
                  <option value="agendado">Agendado</option>
                  <option value="em_andamento">Em Andamento</option>
                  <option value="concluido">Concluído</option>
                  <option value="aprovado">Aprovado</option>
                  <option value="reprovado">Reprovado</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Data Agendada</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Data Realizada</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Data de Resposta</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Entrevistadores</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Duração (minutos)</label>
                <input type="number" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-12 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Feedback da Empresa</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Feedback Pessoal</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-md-12 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Nota de Autoavaliação (1-5)</label>
                <input type="number" class="form-control" id="exampleInputPassword1" />
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
                4
              </span>
              <h4>Feedbacks</h4>
            </div>
            <button v-if="mostrarFeedback" type="button" class="btn btn-link d-inline-flex align-items-center gap-1 p-0"
              style="color: #3b82f6" @click="adicionarFeedback">
              <Plus :size="18" />
              <span>Adicionar Feedback</span>
            </button>
          </div>
          <div>
            <div v-if="mostrarFeedback"
              class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
              style="border-style: dashed; background-color: #f8fafc">
              <p class="text-secondary mb-1">Nenhum feedback registrado</p>
              <p class="small text-muted mb-0">
                Adicione feedbacks da empresa ou pessoais
              </p>
            </div>
            <form class="row m-4 py-5">
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Tipo</label>
                <select id="inputState" class="form-select">
                  <option value="pessoal">Pessoal</option>
                  <option value="empresa">Empresa</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleInputPassword1" class="form-label">Nota (1-5)</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="col-md-12 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Pontos Fortes</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-md-6 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Pontos Fracos</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-md-12 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Aprendizados</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-md-12 mb-3">
                <label for="exampleInputPassword1" class="form-label">Motivo de Rejeição (se aplicável)</label>
                <select id="inputState" class="form-select">
                  <option value="">Nenhum</option>
                  <option value="perfil_nao_adequado">
                    Perfil não adequado
                  </option>
                  <option value="conhecimento_tecnico">
                    Conhecimento Técnico
                  </option>
                  <option value="experiencia_insuficiente">
                    Experiência insuficiente
                  </option>
                  <option value="pretensao_salarial">Pretensão Salárial</option>
                  <option value="soft_skills">Soft Skills</option>
                  <option value="vaga_cancelada">Vaga Cancelada</option>
                  <option value="outro">Outro</option>
                </select>
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
                5
              </span>
              <h4>Timeline / Histórico</h4>
            </div>
          </div>
          <div>
            <div v-if="mostrarEtapas"
              class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
              style="border-style: dashed; background-color: #f8fafc">
              <p class="text-secondary mb-1">Nenhuma etapa registrado</p>
              <p class="small text-muted mb-0">
                Adicione etapas do processo seletivo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Plus, X } from "lucide-vue-next";

const mostrarFeedback = ref(true);
const mostrarEtapas = ref(true);
const mostrarTecnologia = ref(true);

function adicionarFeedback() {
  mostrarFeedback.value = false;
  console.log("ola");
}
function adicionarEtapas() {
  mostrarEtapas.value = false;
  console.log("ola");
}
function adicionarTecnologias() {
  mostrarTecnologia.value = false;
  console.log("ola");
}
</script>
