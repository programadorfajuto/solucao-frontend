<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row" v-for="ocorrencia in ocorrencias" v-bind:key="ocorrencia.id">
              <div class="col" v-on:click="$emit('close')">
                <router-link :to="`/ocorrencias/${ocorrencia.id}`">
                <h4 class="card-title">Você tem uma ocorrência agendada com {{ ocorrencia.socio.nome }}</h4>
                <p class="card-tet">Data e hora: {{ ocorrencia.dataDoAgendamento }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ocorrencias"],
  methods: {
    fechar(){
      this.$emit('close');
    }
  }
};
</script>

<style>
</style>