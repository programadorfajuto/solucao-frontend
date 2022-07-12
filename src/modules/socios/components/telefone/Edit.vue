<template>
  <div class="container-fluid pt-3 pb-3">
    <div class="row">
      <div class="col-lg-3">
        <div class="form-group">
          <label>Ddd:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-phone text-white"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="telefone.ddd"
              v-mask="'##'"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label>Número:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-phone text-white"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="telefone.valor"
              v-mask="'# ####-####'"
            />
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="form-group">
          <label>Descrição:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="telefone.descricao"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <div class="form-check form-check-flat">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="telefone.ativo"
              />
              Ativo?
              <i class="input-helper"></i>
            </label>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check form-check-flat">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="telefone.principal"
              />
              Principal?
              <i class="input-helper"></i>
            </label>
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
  props: ["telefone", "method"],
  methods: {
    salvar() {
      if (this.method == "create") {
        this.$emit("close");
      } else {
        axios
          .put(
            constantes.url + "telefones/" + this.telefone.id,
            this.telefone,
            {
              headers: { Authorization: "Bearer " + localStorage["token"] },
            }
          )
          .then((res) => {
            this.$toasted.success(res.data.mensagem);
            //this.$router.push({ name: "socios-list" });
            document.location.reload(true);
            this.$emit("close");
          })
          .catch((err) => {
            this.$toasted.error(
              err.data
                ? err.data.mensagem
                : "Não foi possível atualizar este telefone."
            );
            this.$emit("close");
          });
      }
    },
  },
};
</script>
