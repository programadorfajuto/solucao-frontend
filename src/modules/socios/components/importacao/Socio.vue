<template>
  <form @submit.prevent="submit" enctype="multipart/form-data" class="p-5">
    <input
      type="file"
      name="file"
      ref="file"
      v-on:change="tratarUpload"
      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    />
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="cpf">Nome da Planilha</label>
          <input type="text" v-model="name" class="form-control" />
        </div>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-lg btn-success"
      v-if="!enviando && file != null"
    >
      Enviar
    </button>
    <button
      type="submit"
      class="btn btn-lg btn-warning"
      v-else-if="file != null"
    >
      <i class="fa-spinner fa fa-spin"></i>
    </button>
  </form>
</template>

<script>
import constantes from "../../../../constantes";
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      enviando: false,
      file: null,
      name: Math.random() + 1,
    };
  },
  methods: {
    ...mapActions("socios", ["ActionImportacao"]),
    submit() {
      this.enviando = true;
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("nome", this.name);
      axios
        .post(
          constantes.url + "importacao/socio/" + localStorage["id"],
          formData,
          {
            headers: {
              "Content-type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          this.enviando = false;
          this.$toasted.success(res.data.mensagem);
          this.$emit("close");
        })
        .catch((err) => {
          this.$toasted.error(
            err.data
              ? err.data.mensagem
              : "Não foi possível processar esta planilha."
          );
          this.$emit("close");
        });
    },
    tratarUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style>
</style>