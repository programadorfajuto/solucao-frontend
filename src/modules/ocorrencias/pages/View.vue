<template>
  <form @submit.prevent="submit()">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Visualizar Ocorrência</h4>
        <router-link class="btn btn-lg btn-primary float-right" to="/ocorrencias">
          <i class="mdi mdi-arrow-left"></i>Voltar
        </router-link>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group">
              <h4 class="text-danger">Nome do Sócio:</h4>
              <h5>{{ model.socio.nome }}</h5>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <h4 class="text-danger">Responsável:</h4>
              <h5>{{ model.operador.nome }}</h5>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <h4 class="text-danger">Data da Abertura:</h4>
              <h5>{{ model.dataDeCriacao }}</h5>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <h4 class="text-danger">Situação:</h4>
              <select
                class="form-control"
                v-model="model.situacao"
                :disabled="user.id != model.operador.id"
              >
                <option
                  v-for="item in situacoesDaOcorrencia"
                  :key="item.value"
                  :value="item.value"
                >{{ item.name }}</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4" v-if="model.situacao == 2">
            <div class="form-group">
              <h4 class="text-danger">Data do Agendamento:</h4>
              <div class="input-group">
                <div class="input-group-prepend bg-danger">
                  <span class="input-group-text bg-transparent">
                    <i class="text-white fa fa-asterisk"></i>
                  </span>
                </div>
                <input
                  :disabled="user.id != model.operador.id"
                  type="text"
                  class="form-control"
                  v-model="model.dataDoAgendamento"
                  v-mask="'##/##/#### ##:##'"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <lista-de-mensagens :model="model" method="edit" />
          </div>
        </div>
      </div>
      <div class="card-footer" v-if="user.id == model.operador.id && user.perfil != 3">
        <button type="submit" class="btn btn-lg btn-success float-right">Salvar</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import constantes from "../../../constantes";
import ListaDeMensagens from "../components/mensagem/List";
export default {
  components: {
    ListaDeMensagens,
  },
  data() {
    return {
      model: {},
      situacoesDaOcorrencia: constantes.situacoesDaOcorrencia,
      perfis: constantes.perfil,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("ocorrencias", [
      "ActionBuscarOcorrencia",
      "ActionEditarOcorrencia",
    ]),
    async submit() {
      try {
        this.model.mensagem = null;
        this.model.operador = this.model.operador.id;
        this.model.socio = this.model.socio.id;
        const mensagem = await this.ActionEditarOcorrencia(this.model);
        this.$toasted.success(mensagem);
        this.$router.push({ name: "ocorrencias-list" });
      } catch (err) {
        this.$toasted.error(
          err.data
            ? err.data.mensagem
            : "Não foi possível adicionar este usuário."
        );
      }
    },
  },
  async mounted() {
    this.model = await this.ActionBuscarOcorrencia(this.$route.params.id);
  },
};
</script>

<style>
</style>