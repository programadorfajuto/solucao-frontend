<template>
  <transition name="bounce">
    <nav class="sidebar sidebar-offcanvas" id="sidebar" v-if="user.perfil == 0 || model == null || user.perfil == 3">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="#" class="nav-link">
            <div class="profile-image">
              <img
                class="img-xs rounded-circle"
                src="@/assets/images/faces-clipart/pic-3.png"
                alt="profile image"
              />
              <div class="dot-indicator bg-success"></div>
            </div>
            <div class="text-wrapper">
              <p class="profile-name">{{ user.nome }}</p>
              <p class="designation">{{ perfil }}</p>
            </div>
          </a>
        </li>
        <li class="nav-item nav-category text-center">
          <router-link to="/ocorrencias/create" class="btn btn-success btn-lg">Nova Ocorrência</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="user.perfil == 0">
          <router-link
            to="/usuarios"
            class="nav-link"
            :class="{'nav-link router-link-active router-link-exact-active': subIsActive('/usuarios')}"
          >
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Usuários</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/socios"
            class="nav-link"
            :class="{'nav-link router-link-active router-link-exact-active': subIsActive('/socios')}"
          >
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Sócios</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/ocorrencias"
            class="nav-link"
            :class="{'nav-link router-link-active router-link-exact-active': subIsActive('/ocorrencias')}"
          >
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Ocorrências</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/recibos"
            class="nav-link"
            :class="{'nav-link router-link-active router-link-exact-active': subIsActive('/recibos')}"
          >
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Recibos</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/envio-de-sms"
            class="nav-link"
            :class="{'nav-link router-link-active router-link-exact-active': subIsActive('/envio-de-sms')}"
          >
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Envio de Sms</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </transition>
</template>
<script>
import constantes from "../constantes";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("socios", ["model"]),
    perfil() {
      return constantes.perfil[this.user.perfil];
    }
  },
  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0;
      });
    }
  }
};
</script>
