<template>
  <div class="container-fluid pt-3 pb-3">
    <div class="row">
      <div class="col">
        <h3 class="text-center">Quer mesmo excluir este dado?</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-lg btn-primary float-left" v-on:click="$emit('close')">
          <i class="mdi mdi-arrow-left"></i> voltar
        </button>
        <button
          type="button"
          class="btn btn-lg btn-danger float-right"
          v-on:click="deletarEntidade"
          v-if="!carregando"
        >Sim, Excluir</button>
        <button
          type="button"
          class="btn btn-lg btn-danger float-right"
          v-on:click="deletarEntidade"
          v-else
        >
          <i class="fa-spin fa fa-refresh"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["namespace", "action", "id"],
  data() {
    return {
      carregando: false
    };
  },
  methods: {
    async deletarEntidade() {
      try {
        this.carregando = true;

        const mensagem = await this.$store.dispatch(
          this.namespace + "/" + this.action,
          this.id
        );
        
        this.carregando = false;
        this.$emit("close");
        this.$toasted.success(mensagem);
      } catch (err) {
        this.carregando = false;
        this.$emit("close");
        this.$toasted.error(
          err.data ? err.data.mensagem : "Não foi possível excluir este dado."
        );
      }
    }
  }
};
</script>

