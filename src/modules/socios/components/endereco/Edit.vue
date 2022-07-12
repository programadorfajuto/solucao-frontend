<template>
  <div class="container-fluid pt-3 pb-3">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <label>Cep:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="cep"
              v-mask="'#####-###'"
              v-on:blur="buscarCep"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="form-group">
          <label>Numero:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input type="text" class="form-control" v-model="endereco.numero" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label>Logradouro:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="endereco.logradouro"
            />
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="form-group">
          <label>UF:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input type="text" class="form-control" v-model="endereco.uf" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label>Cidade:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input type="text" class="form-control" v-model="endereco.cidade" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label>Bairro:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input type="text" class="form-control" v-model="endereco.bairro" />
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="form-group">
          <label>Complemento:</label>
          <div class="input-group">
            <div class="input-group-prepend bg-danger">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-asterisk text-white"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="endereco.complemento"
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
                v-model="endereco.ativo"
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
                v-model="endereco.principal"
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
  data() {
    return {
      cep: this.endereco.cep,
    };
  },
  props: ["endereco", "method"],
  methods: {
    salvar() {
      if (this.method == "create") {
        this.$emit("close");
      } else {
        this.endereco.cep = this.cep;
        axios
          .put(
            constantes.url + "enderecos/" + this.endereco.id,
            this.endereco,
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
                : "Não foi possível atualizar este endereço."
            );
            this.$emit("close");
          });
      }
    },
    buscarCep() {
      const cep = this.cep.replace("-", "");

      this.$viaCep.buscarCep(cep).then((res) => {
        this.endereco.logradouro = res.logradouro;
        this.endereco.bairro = res.bairro;
        this.endereco.cidade = res.localidade;
        this.endereco.uf = res.uf;
        this.endereco.cep = res.cep;
        this.endereco.complemento = res.complemento;
      });
    },
  },
};
</script>
