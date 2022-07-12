<template>
  <transition name="bounce">
    <nav
      class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
      v-if="user.perfil == 0 || model == null || user.perfil == 3"
    >
      <div
        class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"
      >
        <a class="navbar-brand brand-logo" href="/">
          <img src="@/assets/images/logo-200.png" alt="logo" />
        </a>
        <a class="navbar-brand brand-logo-mini" href="/">
          <img src="@/assets/images/logo-mini.png" alt="logo" />
        </a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown" v-if="agendadas.length > 0">
            <a
              class="nav-link count-indicator"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i class="mdi mdi-email-outline"></i>
              <span class="count bg-success">{{ agendadas.length }}</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="notificationDropdown"
            >
              <a class="dropdown-item py-3 border-bottom">
                <p class="mb-0 font-weight-medium float-left">
                  Você tem {{ agendadas.length }} ocorrências agendadas para
                  hoje.
                </p>
                <span class="badge badge-pill badge-primary float-right"
                  >Ver todas</span
                >
              </a>
              <router-link
                v-for="ocorrencia in agendadas"
                :key="ocorrencia.id"
                :to="`/ocorrencias/${ocorrencia.id}`"
                class="dropdown-item preview-item py-3"
              >
                <div class="preview-thumbnail">
                  <i class="mdi mdi-alert m-auto text-danger"></i>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal text-dark mb-1">
                    {{ ocorrencia.socio.nome }}
                  </h6>
                  <p class="font-weight-light small-text mb-0">
                    {{ ocorrencia.mensagens[0].texto }}
                  </p>
                </div>
              </router-link>
            </div>
          </li>
          <li class="nav-item dropdown d-xl-inline-block user-dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="UserDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                class="img-xs rounded-circle"
                src="@/assets/images/faces-clipart/pic-3.png"
                alt="Profile image"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="UserDropdown"
            >
              <div class="dropdown-header text-center">
                <img
                  class="img-md rounded-circle"
                  src="@/assets/images/faces-clipart/pic-3.png"
                  alt="Profile image"
                />
                <p class="mb-1 mt-3 font-weight-semibold">{{ user.nome }}</p>
                <p class="font-weight-light text-muted mb-0">
                  {{ user.email }}
                </p>
              </div>
              <router-link
                :to="{ name: 'ocorrencias-list' }"
                class="dropdown-item"
                v-if="user.perfil != 0 && agendadas.length > 0"
              >
                Ocorrências Agendadas
                <span class="badge badge-pill badge-danger">{{
                  agendadas.length
                }}</span>
                <i class="dropdown-item-icon ti-dashboard"></i>
              </router-link>
              <a
                class="dropdown-item"
                v-if="user.perfil == 0"
                v-on:click="abrirModalDeConfiguracoes"
                >Configurações</a
              >
              <a class="dropdown-item" v-on:click="deslogar">
                Sair
                <i class="dropdown-item-icon ti-power-off"></i>
              </a>
            </div>
          </li>
        </ul>
        <button
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  </transition>
</template>

<script>
import ConfigModalComponent from "./ConfigModalComponent";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      ocorrencias: null,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("ocorrencias", ["agendadas"]),
    ...mapState("socios", ["model"]),
  },
  methods: {
    ...mapActions("auth", ["ActionSignOut"]),
    ...mapActions("ocorrencias", ["ActionBuscarOcorrenciasAgendadas"]),
    async abrirModalDeConfiguracoes() {
      this.$modal.show(
        ConfigModalComponent,
        {
          user: this.user,
          id: this.id,
        },
        { height: "700" }
      );
    },
    async deslogar() {
      try {
        await this.ActionSignOut();

        this.$router.push({ name: "login" });
      } catch (err) {
        this.$toasted.error(
          err.data ? err.data.message : "Não foi possível realizar o logout."
        );
      }
    },
  },
  async mounted() {
    await this.ActionBuscarOcorrenciasAgendadas(window.localStorage["id"]);
  },
};
</script>