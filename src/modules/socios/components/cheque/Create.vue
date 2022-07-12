<template>
  <div class="container-fluid pt-3 pb-3">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <label>Titular:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input type="text" class="form-control" v-model="model.titular" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label>Numero:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input type="text" class="form-control" v-model="model.numero" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label>Vencimento:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="text-white fa fa-asterisk"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="model.vencimento"
              v-mask="'##/##/#### ##:##'"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="form-group">
          <label>Banco:</label>
          <select class="form-control mb-3" v-model="model.banco">
            <option
              v-for="banco in bancos"
              :key="banco.value"
              :value="banco.value"
              >{{ banco.name }}</option
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
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <money v-model="model.valor" class="form-control"></money>
          </div>
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
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import constantes from "../../../../constantes";
export default {
  data() {
    return {
      model: {},
      bancos: constantes.bancos,
    };
  },
  props: ["socio", "method"],
  methods: {
    salvar() {
      if (this.method == "create") {
        this.socio.cheques.push(this.model);
        this.$emit("close");
      } else {
        this.model.socio = this.socio.id;
        axios
          .post(constantes.url + "cheques", this.model, {
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
                : "Não foi possível adicionar este cheque."
            );
            this.$emit("close");
          });
      }
    },
  },
};
</script>
