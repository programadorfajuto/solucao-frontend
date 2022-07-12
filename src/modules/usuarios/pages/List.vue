<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="row">
        <dashboard-card-component
          col="col-md-3"
          title="Total de Usuários"
          :value="dados.totalDeUsuarios"
        />
        <dashboard-card-component
          col="col-md-3"
          title="Total de Operadores"
          :value="dados.totalDeOperadores"
        />
        <dashboard-card-component
          col="col-md-3"
          title="Usuários Ativos"
          :value="dados.usuariosAtivos"
        />
        <dashboard-card-component
          col="col-md-3"
          title="Usuários Inativos"
          :value="dados.usuariosInativos"
        />
      </div>
    </div>
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title mb-5">Filtro de Usuários</h4>
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
                <label>E-mail:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="email" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <router-link
            class="btn btn-lg btn-success float-right"
            :to="{ name: 'usuarios-create' }"
          >Adicionar Usuário</router-link>
          <loader-component v-if="carregando" />
          <table class="table table-striped table-responsive" v-else>
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Cpf</th>
                <th scope="col">Perfil</th>
                <th scope="col">Situação</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in paginados.results" v-bind:key="usuario.id">
                <td>{{ usuario.nome }}</td>
                <td>{{ usuario.email }}</td>
                <td>{{ usuario.cpf }}</td>
                <td>{{ perfis[usuario.perfil] }}</td>
                <td>{{ situacoes[Number(usuario.ativo)] }}</td>
                <td>
                  <crud-actions-component
                    v-on:visualizar="$router.push({name: 'usuarios-view', params : { id : usuario.id}})"
                    v-on:editar="$router.push({name: 'usuarios-edit', params : { id : usuario.id}})"
                    namespace="usuarios"
                    action="ActionExcluirUsuario"
                    :id="usuario.id"
                  />
                  <router-link
                    :to="{name: 'usuarios-unassign', params : { id : usuario.id}}"
                    v-if="user.perfil == 0"
                    class="btn btn-icons btn-rounded btn-info"
                  >
                    <i class="mdi mdi-account"></i>
                  </router-link>
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
    CrudActionsComponent,
  },
  data: () => ({
    carregando: true,
    perfis: constantes.perfil,
    situacoes: constantes.situacao,
    filtro: {
      nome: "",
      email: "",
      cpf: "",
    },
    nome: "",
    email: "",
    cpf: "",
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("usuarios", ["paginados", "dados"]),
  },
  methods: {
    ...mapActions("usuarios", [
      "ActionBuscarUsuariosPaginados",
      "ActionBuscarDadosIniciais",
    ]),
    async filtrar(pagina) {
      this.carregando = true;
      this.filtro.nome = this.nome;
      this.filtro.email = this.email;
      this.filtro.cpf = this.cpf;
      await this.ActionBuscarUsuariosPaginados({
        filtro: this.filtro,
        pagina: pagina,
        quantidade: 5,
      });
      this.carregando = false;
    },
  },
  watch: {
    nome: function (val) {
      this.filtro.nome = val;
      this.filtrar(1);
    },
    email: function (val) {
      this.filtro.email = val;
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