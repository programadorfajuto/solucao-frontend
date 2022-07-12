<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="row">
        <dashboard-card-component
          col="col-md-6"
          title="Total de Ocorrências"
          :value="dados.totalDeOcorrencias"
          v-if="user.perfil == 0 || user.perfil == 3"
        />
      </div>
    </div>
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title mb-5">Filtro de Ocorrências</h4>
          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <label>Nome do Sócio:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="nome" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <router-link
            v-if="user.perfil != 3"
            class="btn btn-lg btn-success float-right"
            :to="{ name: 'ocorrencias-create' }"
          >Adicionar Ocorrência</router-link>
          <loader-component v-if="carregando" />
          <table
            class="table table-striped table-responsive"
            v-else
          >
            <thead>
              <tr>
                <th scope="col">Nome do Sócio</th>
                <th scope="col">Data da Abertura</th>
                <th scope="col">Operador</th>
                <th scope="col">Situação</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ocorrencia in paginados.results" v-bind:key="ocorrencia.id">
                <td>{{ ocorrencia.socio.nome }}</td>
                <td>{{ ocorrencia.dataDeCriacao }}</td>
                <td>{{ ocorrencia.operador ? ocorrencia.operador.nome : 'Não designado' }}</td>
                <td>{{ ocorrencia.situacao == 2 ? situacoes[ocorrencia.situacao] + ' para ' + ocorrencia.dataDoAgendamento : situacoes[ocorrencia.situacao] }}</td>
                <td>
                  <crud-actions-component
                    v-on:visualizar="$router.push({name: 'ocorrencias-view', params : { id : ocorrencia.id}})"
                    v-on:editar="$router.push({name: 'ocorrencias-view', params : { id : ocorrencia.id}})"
                    namespace="ocorrencias"
                    action="ActionExcluirOcorrencia"
                    :id="ocorrencia.id"
                  />
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <div class="text-center">
                <button
                  v-on:click="filtrar(paginados.currentPage > 1 ? paginados.currentPage - 1 : null)"
                  class="btn btn-icons btn-rounded btn-primary"
                >
                  <i class="fa fa-chevron-left"></i>
                </button>
              </div>
            </div>
            <div class="col">
              <div class="text-center">
                <button
                  v-on:click="filtrar(paginados.currentPage < paginados.pageCount ? paginados.currentPage + 1 : null)"
                  class="btn btn-icons btn-rounded btn-primary"
                >
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import DashboardCardComponent from "@/components/DashboardCardComponent";
import LoaderComponent from "@/components/LoaderComponent";
import CrudActionsComponent from "@/components/CrudActionsComponent";
import constantes from "../../../constantes";

export default {
  components: {
    DashboardCardComponent,
    LoaderComponent,
    CrudActionsComponent
  },
  data: () => ({
    carregando: true,
    perfis: constantes.perfil,
    situacoes: constantes.situacaoDaOcorrencia,
    filtro: {
      nome: '',
    },
    nome: ''
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("ocorrencias", ["paginados", "dados"])
  },
  methods: {
    ...mapActions("ocorrencias", [
      "ActionBuscarOcorrenciasPaginadasPorUsuario",
      "ActionBuscarDadosIniciais",
      "ActionBuscarTiposDeContato"
    ]),
    async filtrar(pagina) {
      this.carregando = true;
      this.filtro.nome = this.nome;
      await this.ActionBuscarOcorrenciasPaginadasPorUsuario({
        filtro: this.filtro,
        pagina: pagina,
        quantidade: 5,
        id: window.localStorage["id"]
      });
      this.carregando = false;
    },
  },
  watch: {
    nome: function(val) {
      this.filtro.nome = val;
      this.filtrar(1);
    },
  },
  async mounted() {
    await this.filtrar(1);
    await this.ActionBuscarDadosIniciais();
    await this.ActionBuscarTiposDeContato();
    this.carregando = false;
  }
};
</script>