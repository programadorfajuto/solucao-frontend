<template>
  <div>
    <button
      v-if="user.id == model.operador.id && user.perfil != 3"
      type="button"
      class="btn btn-success btn-sm float-right"
      v-on:click="mostrarModalDeCriacao"
    >Adicionar Mensagem</button>
    <table class="table table-striped table-responsive" v-if="model.mensagens">
      <thead>
        <tr>
          <th>Mensagem</th>
          <th>Responsável</th>
          <th>Data</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mensagem, key) in model.mensagens" v-bind:key="key">
          <td>{{ mensagem.texto }}</td>
          <td>{{ mensagem.operador.nome }}</td>
          <td>{{ mensagem.dataDeCriacao }}</td>
          <td class="text-center">
            <button
              v-if="user.id == model.operador.id && user.perfil != 3"
              v-on:click="mostrarModalDeEdicao(key)"
              type="button"
              class="btn btn-icons btn-rounded btn-warning"
            >
              <i class="mdi mdi-pen"></i>
            </button>
            <button
              v-if="user.perfil == 0"
              v-on:click="remover(key, mensagem.id)"
              type="button"
              class="btn btn-icons btn-rounded btn-danger"
            >
              <i class="mdi mdi-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>
<script>
import Create from "./Create";
import Edit from "./Edit";
import constantes from "../../../../constantes";
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      bancos: constantes.bancos,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  props: ["model", "method"],
  methods: {
    mostrarModalDeCriacao() {
      this.$modal.show(
        Create,
        {
          ocorrencia: this.model,
          method: this.method,
        },
        { height: 380 }
      );
    },
    mostrarModalDeEdicao(key) {
      this.$modal.show(
        Edit,
        { model: this.model.mensagens[key], method: this.method },
        { height: "auto" }
      );
    },
    remover() {
      axios
        .delete(constantes.url + "mensagens/" + this.model.id, {
          headers: { Authorization: "Bearer " + localStorage["token"] },
        })
        .then((res) => {
          const {
            data: { mensagem },
          } = res;
          this.$toasted.success(mensagem);
          this.$router.push({ name: "ocorrencias-list" });
        })
        .catch((err) => {
          this.$toasted.error(
            err.data
              ? err.data.mensagem
              : "Não foi possível excluir esta mensagem."
          );
        });
    },
  },
};
</script>

