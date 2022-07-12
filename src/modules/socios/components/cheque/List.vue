<template>
  <div>
    <button
      type="button"
      class="btn btn-success btn-sm float-right"
      v-on:click="mostrarModalDeCriacao"
    >
      Adicionar Cheque
    </button>
    <table class="table table-striped table-responsive" v-if="socio.cheques">
      <thead>
        <tr>
          <th>Valor</th>
          <th>Titular</th>
          <th>Número</th>
          <th>Banco</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody v-if="socio.cheques != null">
        <tr v-for="(cheque, key) in socio.cheques" v-bind:key="key">
          <td>{{ cheque.valor }}</td>
          <td>{{ cheque.titular }}</td>
          <td>{{ cheque.numero }}</td>
          <td>
            {{ bancos.find((banco) => banco.value == cheque.banco).name }}
          </td>
          <td class="text-center">
            <button
              v-on:click="mostrarModalDeEdicao(key)"
              type="button"
              class="btn btn-icons btn-rounded btn-warning"
            >
              <i class="mdi mdi-pen"></i>
            </button>
            <button
              v-on:click="remover(key, cheque.id)"
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
  data() {
    return {
      bancos: constantes.bancos,
    };
  },
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
        { cheque: this.socio.cheques[key], method: this.method },
        { height: "auto" }
      );
    },
    remover(key, id) {
      if (this.method == "create") this.$delete(this.socio.cheques, key);
      else {
        axios
          .delete(constantes.url + "cheques/" + id, {
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
                : "Não foi possível excluir este cheque."
            );
            this.$emit("close");
          });
      }
    },
  },
};
</script>
