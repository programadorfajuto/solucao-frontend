<template>
  <div class="container-fluid pt-3 pb-3">
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group">
          <label>Mensagem:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input type="text" class="form-control" v-model="model.texto" />
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <label>Tipos De Contato:</label>
          <multiselect
            v-model="model.tiposDeContato"
            :options="tiposDeContato"
            track-by="value"
            label="name"
            :multiple="true"
          ></multiselect>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-small btn-primary float-left"
          v-on:click="$emit('close')"
        >
          <i class="mdi mdi-arrow-left"></i>Voltar
        </button>
        <button
          type="button"
          class="btn btn-small btn-success float-right"
          v-on:click="salvar"
        >Salvar</button>
      </div>
    </div>
  </div>
</template>
<script>
import constantes from "../../../../constantes";
import axios from "axios";
export default {
  data() {
    return {
      model: {},
      tiposDeContato: constantes.tiposDeContato
    };
  },
  props: ["ocorrencia"],
  methods: {
    salvar() {
      this.model.tiposDeContato = this.model.tiposDeContato.map(contato => {
        return contato.value;
      });

      this.model.ocorrencia = this.ocorrencia.id;
      this.model.operador = this.ocorrencia.operador.id;

      axios
        .post(constantes.url + "mensagens", this.model, {
            headers: { Authorization: "Bearer " + localStorage["token"] }
          })
        .then(res => {
          const {
            data: { mensagem }
          } = res;
          this.$toasted.success(mensagem);
          this.$router.push({ name: "ocorrencias-list" });
          this.$emit("close");
        })
        .catch(err => {
          this.$toasted.error(
            err.data
              ? err.data.mensagem
              : "Não foi possível adicionar esta mensagem."
          );
          this.$emit("close");
        });
    }
  }
};
</script>

