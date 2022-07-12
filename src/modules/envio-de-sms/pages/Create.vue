<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <form @submit.prevent="submit()">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Adicionar Usuário</h4>
            <router-link class="btn btn-lg btn-primary float-right" to="/envio-de-sms">
              <i class="mdi mdi-arrow-left"></i>Voltar
            </router-link>
          </div>
          <div class="card-body">
            <loader-component v-if="carregando" />
            <div class="row" v-else>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Número:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="numero"
                      v-mask="'(##) # ####-####'"
                    />
                    <button
                      class="btn btn-sm btn-success"
                      type="button"
                      v-if="showOkButton"
                      v-on:click="adicionarNumero"
                    >
                      <i class="text-white fa fa-check"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Mensagem:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <textarea v-model="envio.mensagem" class="form-control"></textarea>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group" v-for="(numeroParaEnviar, key) in envio.numeros" :key="key">
                  <div class="input-group">
                    <label>{{ numeroParaEnviar }}</label>
                    <button
                      class="btn btn-sm btn-danger"
                      type="button"
                      v-on:click="removerNumero(key)"
                    >
                      <i class="text-white fa fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-lg btn-success float-right" type="submit">Salvar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LoaderComponent from "@/components/LoaderComponent";
export default {
  components: {
    LoaderComponent
  },
  data() {
    return {
      carregando: false,
      showOkButton: false,
      numero: "",
      envio: {
        numeros: [],
        mensagem: "",
        operador: window.localStorage["id"]
      }
    };
  },
  watch: {
    numero: function(valor) {
      if (valor.length == 16) this.showOkButton = true;
      else this.showOkButton = false;
    }
  },
  methods: {
    ...mapActions("envioDeSms", ["ActionAdicionarEnvio"]),
    adicionarNumero() {
      this.envio.numeros.push(this.numero);
      this.numero = "";
    },
    removerNumero(key) {
      this.$delete(this.envio.numeros, key);
    },
    async submit() {
      try {
        this.carregando = true;
        const mensagem = await this.ActionAdicionarEnvio(this.envio);
        this.$toasted.success(mensagem);
        this.carregando = false;
        this.$router.push({ name: "envio-de-sms-list" });
      } catch (err) {
        this.carregando = false;
        this.$toasted.error(
          err.data ? err.data.mensagem : "Não foi possível fazer este envio."
        );
      }
    }
  }
};
</script>

<style>
</style>