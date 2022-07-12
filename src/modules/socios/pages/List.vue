<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="row">
        <dashboard-card-component
          col="col-md-6"
          title="Total de Sócios"
          :value="dados.totalDeSocios"
          v-if="user.perfil == 0"
        />
        <dashboard-card-component
          v-if="user.perfil != 1"
          col="col-md-6"
          title="Total de Sócios Cheque"
          :value="dados.totalDeSociosCheque"
        />
      </div>
    </div>
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title mb-5">Filtro de Sócios</h4>
          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <label>Nome:</label>
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
            <div class="col-lg-3">
              <div class="form-group">
                <label>Cpf:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="cpf" v-mask="'###.###.###-##'" />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Título:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="titulo" />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Títular:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="titular" />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Origem:</label>
                <select class="form-control" v-model="origem">
                  <option value></option>
                  <option
                    v-for="item in origens"
                    :key="item.value"
                    :value="item.value"
                  >{{ item.name }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <label>total de resultados: {{ paginados.rowCount }}</label>
          <router-link
            v-if="user.perfil == 0"
            class="btn btn-lg btn-success float-right ml-5"
            :to="{ name: 'socios-create' }"
          >Adicionar Sócio</router-link>
          <div class="dropdown ml-lg-auto ml-3 toolbar-item float-right">
            <button
              v-if="user.perfil == 0"
              class="btn btn-info btn-lg dropdown-toggle"
              type="button"
              id="dropdownexport"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Importar</button>
            <div class="dropdown-menu" aria-labelledby="dropdownexport">
              <a
                class="dropdown-item"
                href="#"
                v-on:click="mostrarModalDeImportacaoDeSocios"
              >Importar Sócios</a>
              <a
                class="dropdown-item"
                href="#"
                v-on:click="mostrarModalDeImportacaoDeSociosCheque"
              >Importar Sócios Cheque</a>
            </div>
          </div>

          <loader-component v-if="carregando" />
          <table class="table table-striped table-responsive" v-else>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Cpf/Cnpj</th>
                <th scope="col">Título</th>
                <th scope="col">Planilha</th>
                <th scope="col">Situação</th>
                <th scope="col">Origem</th>
                <th scope="col">Operador</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(socio, index) in paginados.results" v-bind:key="socio.id">
                <td>{{ (paginados.pageCount * (paginados.currentPage - 1)) + index + 1}}</td>
                <td>{{ socio.nome }}</td>
                <td>{{ socio.cpfCnpj }}</td>
                <td>{{ socio.titulo }}</td>
                <td>{{ socio.planilha }}</td>
                <td>{{ situacoes[Number(socio.ativo)] }}</td>
                <td>{{ socio.origem != null ? origens.find(o => o.value == socio.origem).name : "Sócio sem Origem" }}</td>
                <td>{{ socio.operador ? socio.operador.nome : 'Não designado' }}</td>
                <td>
                  <crud-actions-component
                    v-on:visualizar="$router.push({name: 'socios-view', params : { id : socio.id}})"
                    v-on:editar="$router.push({name: 'socios-edit', params : { id : socio.id}})"
                    namespace="socios"
                    action="ActionExcluirSocio"
                    :id="socio.id"
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
import ModalDeImportacaoDeSocios from "../components/importacao/Socio";
import ModalDeImportacaoDeSociosCheque from "../components/importacao/SocioCheque";

export default {
  components: {
    DashboardCardComponent,
    LoaderComponent,
    CrudActionsComponent,
  },
  data: () => ({
    carregando: true,
    perfis: constantes.perfil,
    situacoes: constantes.situacao,
    origens: constantes.origens,
    filtro: {
      nome: "",
      cpf: "",
      titulo: "",
      origem: "",
      titular: "",
    },
    nome: "",
    cpf: "",
    titulo: "",
    origem: "",
    titular: "",
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("socios", ["paginados", "dados", "importacao"]),
  },
  methods: {
    ...mapActions("socios", [
      "ActionBuscarSociosPaginados",
      "ActionBuscarDadosIniciais",
    ]),
    async filtrar(pagina) {
      this.carregando = true;
      this.filtro.nome = this.nome;
      this.filtro.titulo = this.titulo;
      this.filtro.origem = this.origem;
      this.filtro.cpf = this.cpf;
      this.filtro.titular = this.titular;
      await this.ActionBuscarSociosPaginados({
        filtro: this.filtro,
        pagina: pagina,
        quantidade: 5,
        id: window.localStorage["id"],
      });
      this.carregando = false;
    },
    mostrarModalDeImportacaoDeSocios() {
      this.$modal.show(ModalDeImportacaoDeSocios, {}, { height: "auto" });
    },
    mostrarModalDeImportacaoDeSociosCheque() {
      this.$modal.show(ModalDeImportacaoDeSociosCheque, {}, { height: "auto" });
    },
  },
  watch: {
    nome: function (val) {
      this.filtro.nome = val;
      this.filtrar(1);
    },
    titular: function (val) {
      this.filtro.titular = val;
      this.filtrar(1);
    },
    titulo: function (val) {
      this.filtro.titulo = val;
      this.filtrar(1);
    },
    origem: function (val) {
      this.filtro.origem = val;
      this.filtrar(1);
    },
    cpf: function (val) {
      this.filtro.cpf = val;
      this.filtrar(1);
    },
  },
  async mounted() {
    await this.filtrar(1);
    await this.ActionBuscarDadosIniciais();
    this.carregando = false;
  },
};
</script>