<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="row">
        <dashboard-card-component
          col="col-md-3"
          title="Total de Sms Enviados"
          :value="dados.totalDeSmsEnviados"
        />
      </div>
    </div>
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Filtro de Sms</h4>
        </div>
        <div class="card-body">
          <router-link v-if="user.perfil != 3"
            class="btn btn-lg btn-success float-right"
            :to="{ name: 'envio-de-sms-create' }"
          >Nova Mensagem</router-link>
          <loader-component v-if="carregando" />
          <table
            class="table table-striped table-responsive"
            v-else
          >
            <thead>
              <tr>
                <th scope="col">Mensagem</th>
                <th scope="col">Responsável</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="envioDeSms in paginados.results" v-bind:key="envioDeSms.id">
                <td>{{ envioDeSms.mensagem.substring(0, 30) }}...</td>
                <td>{{ envioDeSms.operador.nome }}</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <div class="text-center">
                <button
                  v-on:click="filtrar(paginados.currentPage > 1 ? paginados.currentPage - 1 : null)"
                  class="btn btn-icons btn-rounded btn-primary"
                >
                  <i class="fa fa-chevron-left"></i>
                </button>
              </div>
            </div>
            <div class="col">
              <div class="text-center">
                <button
                  v-on:click="filtrar(paginados.currentPage < paginados.pageCount ? paginados.currentPage + 1 : null)"
                  class="btn btn-icons btn-rounded btn-primary"
                >
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import DashboardCardComponent from "@/components/DashboardCardComponent";
import LoaderComponent from "@/components/LoaderComponent";

export default {
  components: {
    DashboardCardComponent,
    LoaderComponent,
  },
  data: () => ({
    carregando: true
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("envioDeSms", ["paginados", "dados"]),
  },
  methods: {
    ...mapActions("envioDeSms", [
      "ActionBuscarEnviosPaginados",
      "ActionBuscarDadosIniciais"
    ]),
    async filtrar(pagina){
      this.carregando = true;
      await this.ActionBuscarEnviosPaginados({pagina: pagina, quantidade: 5, id: window.localStorage["id"]});
      this.carregando = false;
    }
  },
  async mounted() {
    await this.filtrar(1);
    await this.ActionBuscarDadosIniciais();
    this.carregando = false;
  }
};
</script>