<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <form @submit.prevent="submit()">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Editar Sócio</h4>
            <router-link
              class="btn btn-lg btn-primary float-right"
              to="/socios"
            >
              <i class="mdi mdi-arrow-left"></i>Voltar
            </router-link>
            <button
              class="btn btn-lg btn-success float-right mr-4"
              type="submit"
            >
              Salvar
            </button>
          </div>
          <div class="card-body">
            <loader-component v-if="carregando" />
            <div class="row" v-else>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Nome:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-user-circle"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.nome"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Cpf/Cnpj:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.cpfCnpj"
                      v-mask="['###.###.###-##', '##.###.####/####-##']"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Rg:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.rg"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Data de Nascimento:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.dataDeNascimento"
                      v-mask="'##/##/#### ##:##'"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <div class="form-check form-check-flat">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="model.ativo"
                      />
                      Ativo?
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Título:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.titulo"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Categoria:</label>
                  <select class="form-control" v-model="model.categoria">
                    <option
                      v-for="item in categorias"
                      :key="item.value"
                      :value="item.value"
                      >{{ item.name }}</option
                    >
                  </select>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Valor:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <money v-model="model.valor" class="form-control"></money>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Operador:</label>
                  <multiselect
                    v-model="model.operador"
                    :options="todos"
                    track-by="id"
                    label="nome"
                  ></multiselect>
                </div>
              </div>
              <div class="col-lg-12 mb-5">
                <div class="form-group">
                  <label>Observacao:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <textarea
                      v-model="model.observacao"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <lista-de-emails :socio="model" method="edit" />
              </div>
              <div class="col-lg-6 mb-5">
                <lista-de-telefones :socio="model" method="edit" />
              </div>
              <div class="col-lg-12 mb-5">
                <lista-de-enderecos :socio="model" method="edit" />
              </div>
              <div class="col-lg-12 text-center">
                <button
                  type="button"
                  class="btn btn-lg btn-info"
                  v-on:click="socioCheque = !socioCheque"
                  v-if="!socioCheque"
                >
                  Sócio Cheque
                </button>
                <button
                  type="button"
                  class="btn btn-lg btn-info"
                  v-on:click="socioCheque = !socioCheque"
                  v-else
                >
                  Sócio Normal
                </button>
              </div>
              <div class="col-lg-12" v-if="socioCheque">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="form-group">
                      <label>Origem:</label>
                      <select class="form-control" v-model="model.origem">
                        <option value=""></option>
                        <option
                          v-for="origem in origens"
                          :key="origem.value"
                          :value="origem.value"
                          >{{ origem.name }}</option
                        >
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <lista-de-cheques :socio="model" method="edit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-lg btn-success float-right" type="submit">
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import constantes from "../../../constantes";
import { mapActions, mapState } from "vuex";
import LoaderComponent from "@/components/LoaderComponent";
import ListaDeEmails from "../components/email/List";
import ListaDeEnderecos from "../components/endereco/List";
import ListaDeTelefones from "../components/telefone/List";
import ListaDeCheques from "../components/cheque/List";
export default {
  components: {
    LoaderComponent,
    ListaDeEmails,
    ListaDeEnderecos,
    ListaDeTelefones,
    ListaDeCheques,
  },
  data() {
    return {
      carregando: false,
      model: {},
      todos: [],
      perfis: constantes.perfis,
      categorias: constantes.categorias,
      origens: constantes.origens,
      socioCheque: false,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("socios", [
      "ActionEditarSocio",
      "ActionBuscarSocio",
      "ActionConfigurarSocio",
    ]),
    ...mapActions("usuarios", ["ActionBuscarUsuarios"]),
    async submit() {
      try {
        this.model.cheques = null;
        this.model.emails = null;
        this.model.telefones = null;
        this.model.enderecos = null;
        this.model.operador = this.model.operador.id;
        this.model.socioCheque = this.socioCheque;
        this.carregando = true;
        const mensagem = await this.ActionEditarSocio(this.model);
        this.$toasted.success(mensagem);
        this.carregando = false;
        this.$router.push({ name: "socios-list" });
      } catch (err) {
        this.carregando = false;
        this.$toasted.error(
          err.data ? err.data.mensagem : "Não foi possível editar este sócio."
        );
      }
    },
  },
  async mounted() {
    this.model = await this.ActionBuscarSocio(this.$route.params.id);
    this.todos = await this.ActionBuscarUsuarios();
  },
  async beforeDestroy() {
    await this.ActionConfigurarSocio(null);
  },
};
</script>

<style></style>
