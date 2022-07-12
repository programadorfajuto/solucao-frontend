<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <form @submit.prevent="submit()">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Adicionar Ocorrências</h4>
            <router-link class="btn btn-lg btn-primary float-right" to="/socios" v-if="model != null">
              <i class="mdi mdi-arrow-left"></i>Voltar
            </router-link>
          </div>
          <div class="card-body">
            <loader-component v-if="carregando" />
            <div class="row" v-else>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Sócio:</label>
                  <multiselect v-model="socio" :options="todos" track-by="id" label="nome" :searchable="true" @search-change="asyncFind" :loading="multiselectLoading"></multiselect>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Situação:</label>
                  <multiselect
                    v-model="situacao"
                    :options="situacoes"
                    track-by="value"
                    label="name"
                  ></multiselect>
                </div>
              </div>
              <div class="col-lg-3" v-if="situacao.value == 2">
                <div class="form-group">
                  <label>Data do Agendamento:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="ocorrencia.dataDoAgendamento"
                      v-mask="'##/##/#### ##:##'"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <div class="form-check form-check-flat">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" v-model="ocorrencia.ativo" />
                      Ativo?
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Mensagem:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="fa fa-asterisk text-white"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" v-model="ocorrencia.mensagem" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Tipos De Contato:</label>
                  <multiselect
                    v-model="ocorrencia.tiposDeContato"
                    :options="tiposDeContato"
                    track-by="value"
                    label="name"
                    :multiple="true"
                  ></multiselect>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-lg btn-success float-right" type="submit">Salvar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import LoaderComponent from "@/components/LoaderComponent";
import constantes from "../../../constantes";
export default {
  components: {
    LoaderComponent
  },
  data() {
    return {
      carregando: false,
      multiselectLoading: false,
      ocorrencia: {
        ativo: true,
        operador: window.localStorage["id"]
      },
      tiposDeContato: constantes.tiposDeContato,
      situacoes: constantes.situacoesDaOcorrencia,
      situacao: {
        value: "",
        name: ""
      },
      todos: [],
      socio: {}
    };
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("socios", ["ActionBuscarSociosPaginados", "ActionConfigurarSocio"]),
    ...mapActions("ocorrencias", ["ActionAdicionarOcorrencia"]),
    asyncFind (query) {
      this.multiselectLoading = true
      this.ActionBuscarSociosPaginados({ filtro: {
        nome: query
      }, pagina : 1, quantidade: 10, id: window.localStorage["id"] }).then(response => {
        this.todos = response.results
        this.socio = this.todos.find(s => s.id == this.$route.params.id);
        this.multiselectLoading = false
      })
    },
    async submit() {
      try {
        this.carregando = true;

        this.ocorrencia.tiposDeContato = this.ocorrencia.tiposDeContato.map(
          contato => {
            return contato.value;
          }
        );

        this.ocorrencia.socio = this.socio.id;
        this.ocorrencia.situacao = this.situacao.value;

        const mensagem = await this.ActionAdicionarOcorrencia(this.ocorrencia);
        this.$toasted.success(mensagem);
        this.carregando = false;
        this.$router.push({ name: "ocorrencias-list" });
      } catch (err) {
        this.carregando = false;
        this.$toasted.error(
          err.data
            ? err.data.mensagem
            : "Não foi possível adicionar este usuário."
        );
      }
    }
  },
  async mounted() {
    this.asyncFind(this.$route.params.nome);
  },
  async beforeDestroy() {
    await this.ActionConfigurarSocio(null);
  }
};
</script>

<style>
</style>