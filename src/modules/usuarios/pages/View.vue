<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Visualizar Usuário</h4>
      <router-link class="btn btn-lg btn-primary float-right" to="/usuarios">
        <i class="mdi mdi-arrow-left"></i>Voltar
      </router-link>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">Nome:</h4>
            <h5>{{ model.nome }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">E-mail:</h4>
            <h5>{{ model.email }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">CPF:</h4>
            <h5>{{ model.cpf }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">Situação:</h4>
            <h5>{{ situacoes[Number(model.ativo)] }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">Perfil:</h4>
            <h5>{{ perfis[model.perfil] }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">Data de Criação:</h4>
            <h5>{{ model.dataDeCriacao }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer" v-if="user.perfil == 0">
      <router-link
        class="btn btn-lg btn-warning float-right"
        :to="{ name: 'usuarios-edit', params: {id: model.id}}"
      >Editar</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import constantes from "../../../constantes"
export default {
  data(){
    return {
      model: {},
      situacoes: constantes.situacao,
      perfis: constantes.perfil
    }
  },
  computed: {
    ...mapState("usuarios", ["paginados"]),
    ...mapState("auth", ['user'])
  },
  mounted(){
    this.model = this.paginados.results.find(model => model.id == this.$route.params.id)
  }
};
</script>

<style>
</style>