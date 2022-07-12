<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Visualizar Usuário</h4>
      <router-link class="btn btn-lg btn-primary float-right" to="/socios" v-if="user.perfil == 0 || user.perfil == 3">
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
            <h4 class="text-danger">Valor:</h4>
            <h5>R$ {{ model.valor }},00</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">CPF/CNPJ:</h4>
            <h5>{{ model.cpfCnpj }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">RG:</h4>
            <h5>{{ model.rg }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">Título:</h4>
            <h5>{{ model.titulo }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">Data de Designação:</h4>
            <h5>{{ model.dataDeDesignacao ? model.dataDeDesignacao : "Não designado" }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">Responsável:</h4>
            <h5>{{ model.operador? model.operador.nome : 'Não designado' }}</h5>
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
            <h4 class="text-danger">Categoria:</h4>
            <h5>{{ categorias[model.categoria] }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <h4 class="text-danger">Data de Criação:</h4>
            <h5>{{ model.dataDeCriacao }}</h5>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group">
            <h4 class="text-danger">Observação:</h4>
            <h5>{{ model.observacao }}</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <h4 class="text-danger">Telefones:</h4>
          <h5 v-for="telefone in model.telefones" v-bind:key="telefone.id">
            ({{ telefone.ddd }}) {{ telefone.valor }}
            <small
              v-if="telefone.principal"
              class="text-muted"
            >telefone principal</small>
            <small v-else class="text-muted">telefone secundário</small>
          </h5>
        </div>
        <div class="col-lg-6">
          <h4 class="text-danger">Endereços:</h4>
          <h5
            v-for="endereco in model.enderecos"
            v-bind:key="endereco.id"
          >{{ endereco.logradouro }}, número {{ endereco.numero }} bairro {{ endereco.bairro }} {{ endereco.cidade }}-{{ endereco.uf }}</h5>
        </div>
        <div class="col-lg-12">
          <h4 class="text-danger">E-mails:</h4>
          <h5 v-for="email in model.emails" v-bind:key="email.id">
            {{ email.valor }}
            <small v-if="email.principal" class="text-muted">e-mail principal</small>
            <small v-else class="text-muted">e-mail secundário</small>
          </h5>
        </div>
        <div class="col-lg-12" v-if="model.cheques != null && model.cheques.length > 0">
          <h4 class="text-danger">Cheques:</h4>
          <h5 v-for="cheque in model.cheques" v-bind:key="cheque.id">
            titular: {{ cheque.titular }},
            data de vencimento: {{ cheque.vencimento }},
            banco: {{ bancos[cheque.banco].name }},
            valor: R$ {{ cheque.valor }},00 ,
            número: {{ cheque.numero }}
          </h5>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <router-link
        v-if="user.perfil == 0"
        class="btn btn-lg btn-warning float-right"
        :to="{ name: 'socios-edit', params: {id: model.id}}"
      >Editar</router-link>
      <router-link
        v-if="user.perfil != 3"
        class="btn btn-lg btn-success"
        :to="{ name: 'ocorrencias-create', params: {id: model.id, nome: model.nome}}"
      >Abrir Ocorrência</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import constantes from "../../../constantes";
export default {
  data() {
    return {
      situacoes: constantes.situacao,
      categorias: constantes.categoria,
      bancos: constantes.bancos,
      model: {}
    };
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("socios", ["ActionBuscarSocio", "ActionConfigurarSocio"])
  },
  async mounted() {
    this.model = await this.ActionBuscarSocio(this.$route.params.id);
  }
};
</script>

<style>
</style>