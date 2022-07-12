<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <page-title-header-component title="Dashboard" />
      <div class="row">
        <div class="col-md-12 grid-margin">
          <div class="row" v-if="user.perfil == 0 || user.perfil == 3">
            <dashboard-card-component
              col="col-md-4"
              title="Total de Sms Enviados"
              :value="dados.totalDeSmsEnviados"
            />
            <dashboard-card-component
              col="col-md-4"
              title="Total de Ocorrências Registradas"
              :value="dados.totalDeOcorrenciasRegistradas"
            />
            <dashboard-card-component
              col="col-md-4"
              title="Total de Usuários Registrados"
              :value="dados.totalDeUsuariosRegistrados"
            />
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <blockquote class="blockquote blockquote-danger">
                    <footer class="blockquote-footer">
                      Bem-vindo
                      <cite title="Source Title">{{ user.nome }}</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import PageTitleHeaderComponent from "@/components/PageTitleHeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import DashboardCardComponent from "@/components/DashboardCardComponent";
import Notification from "./components/Notification";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      ocorrencias: []
    };
  },
  components: {
    FooterComponent,
    PageTitleHeaderComponent,
    DashboardCardComponent
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("dashboard", ["dados"])
  },
  methods: {
    ...mapActions("dashboard", ["ActionBuscarDadosIniciais"]),
    ...mapActions("ocorrencias", ["ActionBuscarOcorrenciasAgendadas"]),
    mostrarModalDeOcorrenciasAgendadas() {
      this.$modal.show(
        Notification,
        {
          ocorrencias: this.ocorrencias
        },
        { height: "auto" }
      );
    }
  },
  async mounted() {
    this.ActionBuscarDadosIniciais();
    this.ocorrencias = await this.ActionBuscarOcorrenciasAgendadas(
      window.localStorage["id"]
    );
    if(this.ocorrencias.length > 0){
      this.mostrarModalDeOcorrenciasAgendadas();
    }
  }
};
</script>
