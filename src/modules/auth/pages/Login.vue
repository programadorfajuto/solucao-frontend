<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper" id="vue-login">
    <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
      <div class="row w-100">
        <div class="col-lg-4 mx-auto">
          <div class="auto-form-wrapper">
            <form @submit.prevent="submit()">
              <div class="form-group">
                <label class="label">E-mail</label>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="E-mail" v-model="form.email" />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="mdi mdi-check-circle-outline"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="label">Senha</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="*********"
                    v-model="form.senha"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="mdi mdi-check-circle-outline"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group text-center">
                <transition name="bounce">
                  <button
                    v-if="!logando"
                    class="btn btn-danger submit-btn btn-block"
                    type="submit"
                  >Login</button>
                </transition>
              </div>
              <div class="form-group d-flex justify-content-between">
                <div class="form-check form-check-flat mt-0">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" checked /> Matenha-me logado
                  </label>
                </div>
                <a href="#" class="text-small forgot-password text-black">Esqueci minha senha</a>
              </div>
            </form>
          </div>
          <ul class="auth-footer">
            <li></li>
          </ul>
          <p
            class="footer-text text-center"
          >copyright © 2019 Solução Assessoria & Cobrança. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
    <!-- content-wrapper ends -->
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      email: "",
      senha: ""
    },
    logando: false
  }),
  methods: {
    ...mapActions("auth", ["ActionDoLogin"]),
    async submit() {
      try {
        this.logando = true;
        await this.ActionDoLogin(this.form);

        this.$router.push(this.$route.query.redirect || { name: "dashboard" });
      } catch (err) {
        this.logando = false;
        this.$toasted.error(
          err.data ? err.data.mensagem : "Não foi possível realizar o login."
        );
      }
    }
  }
};
</script>

<style scoped>
.auth.auth-bg-1{
  background: url("~@/assets/images/auth/img1.jpg");
  background-size: cover;
}
</style>