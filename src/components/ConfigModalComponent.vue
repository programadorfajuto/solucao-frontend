<template>
  <div class="container-fluid pt-3 pb-3">
    <div class="row">
      <div class="col">
        <h3 class="text-center">
          Quantidade máxima de SMS's que cada Operador pode enviar por dia
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Operador:</label>
          <multiselect
            v-model="operador"
            :options="todos"
            track-by="id"
            label="nome"
          ></multiselect>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label>Valor:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="model.maximoDeSmsEnviadoPorDia"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-lg btn-primary float-left"
          v-on:click="$emit('close')"
        >
          <i class="mdi mdi-arrow-left"></i> voltar
        </button>
        <button
          type="button"
          class="btn btn-lg btn-success float-right"
          v-on:click="atualizarQuantidadeMaximaDeSmsPorDia"
          v-if="!carregando"
        >
          Salvar
        </button>
        <button type="button" class="btn btn-lg btn-danger float-right" v-else>
          <i class="fa-spin fa fa-refresh"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import constantes from "@/constantes";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  props: ["user"],
  data() {
    return {
      loading: false,
      todos: [],
      operador: {},
      model: {
        maximoDeSmsEnviadoPorDia: 0,
        operador: 1,
      },
      carregando: false,
    };
  },
  watch: {
    operador: function (myOperador) {
      if (myOperador != null) {
        this.model.maximoDeSmsEnviadoPorDia =
          myOperador.maximoDeSmsEnviadoPorDia;
        this.model.operador = this.operador.id;
      } else {
        this.model.maximoDeSmsEnviadoPorDia = 0;
        this.model.operador = null;
      }
    },
  },
  methods: {
    ...mapActions("usuarios", ["ActionBuscarUsuarios"]),
    async atualizarQuantidadeMaximaDeSmsPorDia() {
      this.loading = true;
      axios
        .post(constantes.url + "configuracao", this.model, {
          headers: { Authorization: "Bearer " + localStorage["token"] },
        })
        .then((res) => {
          const {
            data: { mensagem },
          } = res;
          this.$toasted.success(mensagem);
          this.$emit("close");
          setTimeout(() => {
            location.reload();
          }, 1000);
        })
        .catch((err) => {
          this.$toasted.error(
            err.data
              ? err.data.mensagem
              : "Não foi possível atualizar esta configuração."
          );
          this.$emit("close");
        });
    },
  },
  async mounted() {
    this.todos = await this.ActionBuscarUsuarios();
    this.operador = this.todos.find((u) => u.id == this.user.id);
  },
};
</script>

