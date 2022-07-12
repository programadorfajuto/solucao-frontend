<template>
  <div>
    <button
      type="button"
      class="btn btn-success btn-sm float-right"
      v-on:click="mostrarModalDeCriacao"
    >
      Adicionar Telefone
    </button>
    <table class="table table-striped table-responsive" v-if="socio.telefones">
      <thead>
        <tr>
          <th>Valor</th>
          <th>Tipo</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(telefone, key) in socio.telefones" v-bind:key="key">
          <td>({{ telefone.ddd }}) {{ telefone.valor }}</td>
          <td>{{ telefone.principal ? "Principal" : "Secundário" }}</td>
          <td class="text-center">
            <button
              v-on:click="mostrarModalDeEdicao(key)"
              type="button"
              class="btn btn-icons btn-rounded btn-warning"
            >
              <i class="mdi mdi-pen"></i>
            </button>
            <button
              v-on:click="remover(key, telefone.id)"
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
export default {
  props: ["socio", "method"],
  methods: {
    mostrarModalDeCriacao() {
      this.$modal.show(
        Create,
        {
          socio: this.socio,
          method: this.method,
        },
        { height: "auto" }
      );
    },
    mostrarModalDeEdicao(key) {
      this.$modal.show(
        Edit,
        { telefone: this.socio.telefones[key], method: this.method },
        { height: "auto" }
      );
    },
    remover(key, id) {
      if (this.method == "create") this.$delete(this.socio.telefones, key);
      else {
        axios
          .delete(constantes.url + "telefones/" + id, {
            headers: { Authorization: "Bearer " + localStorage["token"] },
          })
          .then((res) => {
            this.$toasted.success(res.data.mensagem);
            // this.$router.push({ name: "socios-list" });
            document.location.reload(true);
            this.$emit("close");
          })
          .catch((err) => {
            this.$toasted.error(
              err.data
                ? err.data.mensagem
                : "Não foi possível excluir este telefone."
            );
            this.$emit("close");
          });
      }
    },
  },
};
</script>
