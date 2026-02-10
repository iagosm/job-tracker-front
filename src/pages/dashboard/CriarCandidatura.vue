<template>
  <div class="container-main">
    <h3>Dashboard</h3>
    <p>Acompanhe suas candidaturas em tempo real</p>
    <div class="row g-3">
         <div class="col-12 col-md-6 col-lg-12">
            <div class="card h-100 p-3">
              <div class="d-flex align-items-center gap-3">
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold text-primary bg-primary bg-opacity-10"
                    style="width: 2rem; height: 2rem;"
                  > 
                  1 </span>
                <h4>Informações da Vaga</h4>
              </div>
              <div>
                <form class="row">
                  <div class="col-md-6">
                    <label for="exampleInputEmail1" class="form-label">Empresa</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Cargo / Posição</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Plataforma</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Link da Vaga</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Tipo de Trabalho</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Localização</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Nível da Vaga</label>
                    <select id="inputState" class="form-select">
                      <option value="estagio">Estágio</option>
                      <option value="junior">Júnior</option>
                      <option value="pleno">Pleno</option>
                      <option value="senior">Sênior</option>
                      <option value="especialista">Especialista</option>
                    </select>
                  </div>
                  <div class="col-md-6">
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
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Salário Mínimo</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Salário Máximo</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Data de Aplicação</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Data de Resposta</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-6">
                    <label for="exampleInputPassword1" class="form-label">Data de Encerramento</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col-md-2 mt-4 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Salário a combinar</label>
                  </div>
                  <div class="col-md-3 mt-4 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck2">
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
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold text-primary bg-primary bg-opacity-10"
                    style="width: 2rem; height: 2rem;"
                  > 
                  2 </span>
                  <h4>Tecnologias da Vaga</h4>
                </div>
                <div style="color:#3B82F6">
                  <Plus :size="18"/>
                  <span>Adicionar Tecnologia</span>
                </div>
              </div>
              <div>
                <div v-if="mostrarTecnologia"
                  class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
                  style="border-style: dashed; background-color: #f8fafc;"
                >
                  <p class="text-secondary mb-1">Nenhuma tecnologia adicionada</p>
                  <p class="small text-muted mb-0">Clique em "Adicionar Tecnologia" para começar</p>
                </div>
                 <form class="row">
                  <div class="col-md-3">
                    <label for="exampleInputPassword1" class="form-label">Status</label>
                    <select id="inputState" class="form-select">
                      <option value="">Selecione uma tecnologia</option>
                      <option value="react">React</option>
                      <option value="typescript">TypeScript</option>
                      <option value="nodejs">Node.js</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="javascript">JavaScript</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="exampleInputPassword1" class="form-label">Status</label>
                    <select id="inputState" class="form-select">
                      <option value="">Selecione uma tecnologia</option>
                      <option value="react">React</option>
                      <option value="typescript">TypeScript</option>
                      <option value="nodejs">Node.js</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="javascript">JavaScript</option>
                    </select>
                  </div>
                  <div class="col-md-3 mt-5 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck2">
                    <label class="form-check-label" for="exampleCheck2">Currículo visualizado</label>
                  </div>
                  <div class="col-md-3 mt-5 form-check">
                    <X color="#EF4444" :size="18" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-12">
            <div class="card h-100 p-3">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-3">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold text-primary bg-primary bg-opacity-10"
                    style="width: 2rem; height: 2rem;"
                  > 
                  3 </span>
                  <h4>Etapas do Processo Seletivo</h4>
                </div>
                <div style="color:#3B82F6">
                  <Plus :size="18" />
                  <span>Adicionar Etapa</span>
                </div>
              </div>
              <div>
                <div v-if="mostrarEtapas"
                  class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
                  style="border-style: dashed; background-color: #f8fafc;"
                >
                  <p class="text-secondary mb-1">Nenhuma etapa registrado</p>
                  <p class="small text-muted mb-0">Adicione etapas do processo seletivo</p>
                </div>
                <form class="row">

                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-12">
            <div class="card h-100 p-3">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-3">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold text-primary bg-primary bg-opacity-10"
                    style="width: 2rem; height: 2rem;"
                  >
                    4
                  </span>
                  <h4>Feedbacks</h4>
                </div>
                <button v-if="mostrarFeedback"
                  type="button"
                  class="btn btn-link d-inline-flex align-items-center gap-1 p-0"
                  style="color:#3B82F6"
                  @click="adicionarFeedback"
                >
                  <Plus :size="18" />
                  <span>Adicionar Feedback</span>
                </button>

              </div>
              <div>
                <div v-if="mostrarFeedback"
                  class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
                  style="border-style: dashed; background-color: #f8fafc;"
                >
                  <p class="text-secondary mb-1">Nenhum feedback registrado</p>
                  <p class="small text-muted mb-0">Adicione feedbacks da empresa ou pessoais</p>
                </div>
                <form class="row">

                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-12">
            <div class="card h-100 p-3">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-3">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold text-primary bg-primary bg-opacity-10"
                    style="width: 2rem; height: 2rem;"
                  > 
                  5 </span>
                  <h4>Timeline / Histórico</h4>
                </div>
              </div>
              <div>
                <div v-if="mostrarEtapas"
                  class="text-center py-5 rounded border border-2 border-secondary border-opacity-25 m-4"
                  style="border-style: dashed; background-color: #f8fafc;"
                >
                  <p class="text-secondary mb-1">Nenhuma etapa registrado</p>
                  <p class="small text-muted mb-0">Adicione etapas do processo seletivo</p>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { Plus, X } from 'lucide-vue-next'

  const mostrarFeedback = ref(true);
  const mostrarEtapas = ref(true);
  const mostrarTecnologia = ref(true);

  function adicionarFeedback() {
    mostrarFeedback.value = false;
    console.log('ola')
  }
  function adicionarEtapas() {
    mostrarEtapas.value = false;
    console.log('ola')
  }
  function adicionarTecnologias() {
    mostrarTecnologia.value = false;
    console.log('ola')
  }
</script>