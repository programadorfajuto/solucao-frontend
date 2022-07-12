<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <form @submit.prevent="submit()">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Editar Usuário</h4>
            <router-link class="btn btn-lg btn-primary float-right" to="/usuarios">
              <i class="mdi mdi-arrow-left"></i>Voltar
            </router-link>
          </div>
          <div class="card-body">
            <loader-component v-if="carregando" />
            <div class="row" v-else>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Nome:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-user-circle"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" v-model="usuario.nome" />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>E-mail:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-at"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" v-model="usuario.email" />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Cpf:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-asterisk"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="usuario.cpf"
                      v-mask="'###.###.###-##'"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <div class="form-check form-check-flat">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" v-model="usuario.ativo" />
                      Ativo?
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Perfil:</label>
                  <select class="form-control" v-model="usuario.perfil">
                    <option
                      v-for="item in perfis"
                      :key="item.value"
                      :value="item.value"
                    >{{ item.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Senha:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-lock"></i>
                      </span>
                    </div>
                    <input type="password" class="form-control" v-model="usuario.senha" />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Confirmação de Senha:</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-danger">
                      <span class="input-group-text bg-transparent">
                        <i class="text-white fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      v-model="usuario.confirmacaoDeSenha"
                    />
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
import constantes from "../../../constantes";
import { mapActions, mapState } from "vuex";
import LoaderComponent from "@/components/LoaderComponent";
export default {
  components: {
    LoaderComponent
  },
  data() {
    return {
      carregando: false,
      usuario: {},
      perfis: constantes.perfis
    };
  },
  computed: {
    ...mapState('usuarios', ['paginados'])
  },
  methods: {
    ...mapActions("usuarios", ["ActionEditarUsuario"]),
    async submit() {
      try {
        this.carregando = true;
        const mensagem = await this.ActionEditarUsuario(this.usuario);
        this.$toasted.success(mensagem);
        this.carregando = false;
        this.$router.push({ name: "usuarios-list" });
      } catch (err) {
        this.carregando = false;
        this.$toasted.error(
          err.data
            ? err.data.mensagem
            : "Não foi possível editar este usuário."
        );
      }
    }
  },
  mounted() {
    this.usuario = this.paginados.results.find(
      usuario => usuario.id == this.$route.params.id
    );
  }
};
</script>

<style>
</style>