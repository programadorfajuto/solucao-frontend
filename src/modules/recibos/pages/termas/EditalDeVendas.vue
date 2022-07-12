<template>
  <transition name="slide-fade">
    <div>
      <div class="card">
        <div class="card-header">
          <router-link class="btn btn-lg btn-primary" to="/recibos">
            <i class="mdi mdi-arrow-left"></i>Voltar
          </router-link>
          <div class="row mt-3">
            <div class="col-md-3">
              <div class="form-group">
                <label>Nome do Sócio:</label>
                <multiselect
                  v-model="socio"
                  :options="todos"
                  track-by="id"
                  label="nome"
                  :searchable="true"
                  @search-change="asyncFind"
                  @input="update"
                  :loading="multiselectLoading"
                ></multiselect>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="cpf">CPF do Sócio</label>
                <input type="text" v-model="cpf" class="form-control" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="number_of_contract">N° do Contrato</label>
                <input
                  type="text"
                  v-model="numberContract"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="value">Valor do Contrato</label>
                <input type="text" v-model="value" class="form-control" />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label for="telephone">Telefone para contato</label>
                <input type="text" v-model="telephone" class="form-control" />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="operator">Data</label>
              <input type="text" v-model="date" class="form-control" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <button
                class="btn btn-lg btn-success float-right"
                v-print="'#div-print'"
              >
                Imprimir
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div id="div-print">
            <div class="row mt-3">
              <div class="col-sm-12">
                <img
                  src="@/assets/images/Termas.svg"
                  class="float-right"
                  id="logoIt"
                  alt="Logo Termas Solar Hotel Clube"
                  style="width: 600px"
                />
              </div>
              <h2 class="text-center font-normal">
                <b>AUTORIZAÇÃO P/ PUBLICAÇÃO DE VENDAS</b>
              </h2>
              <h5>
                <u>
                  <b>n° serie: {{ numberSerie }}</b>
                </u>
              </h5>
            </div>
            <div class="ed-box">
              <div class="row" style="font-size: 23px">
                <div class="col-sm-12">
                  <i
                    ><u
                      ><b>Formosa-GO, {{ date }}</b></u
                    ></i
                  >
                  <p>
                    Declaramos para todos os fins de direito que o(a) SR(a)
                    <b>{{ name }}</b
                    >, portador do título Nº <b>{{ numberContract }}</b
                    >, autoriza neste ato colocar seu <b>TÍTULO</b>
                    em
                    <b>EDITAL DE VENDAS</b>. O clube Estância Termas Solar e a
                    Solucão Útil Assessoria, não se responsabilizam pela venda.
                  </p>
                  <p class="mt-2 text-center">
                    Valor do título:
                    <b>R$ {{ value }}</b>
                  </p>
                  <p class="mt-2 text-center">
                    <b>Valor Negociável</b>
                  </p>
                  <p>
                    Telefone para contato:
                    <b>{{ telephone }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 text-center">
                  <p class="text-center">
                    __________________________________________
                  </p>
                  <p class="text-center">
                    <br />
                    <b>ASSINATURA DO ASSOCIADO/RESPONSÁVEL</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
let date = moment().locale("pt-br");
export default {
  data() {
    return {
      name: "",
      date: date.format("LL"),
      numberSerie: Math.random() + 1,
      numberContract: "",
      cpf: "",
      value: "",
      telephone: "",
      multiselectLoading: false,
      todos: [],
      socio: {},
    };
  },
  methods: {
    ...mapActions("socios", ["ActionBuscarSociosPaginados"]),
    update() {
      console.log(this.socio);
      if (this.socio != null) {
        this.name = this.socio.nome;
        this.cpf = this.socio.cpfCnpj;
        this.value = this.socio.valor;
        this.numberContract = this.socio.titulo;
        if (this.socio.telefones.length > 0) {
          this.telephone =
            "(" +
            this.socio.telefones[0].ddd +
            ") " +
            this.socio.telefones[0].valor;
        } else {
          this.telephone = "";
        }
        if (this.socio.enderecos.length > 0) {
          this.address = this.socio.enderecos[0].logradouro;
          this.city = this.socio.enderecos[0].cidade;
          this.neighborhood = this.socio.enderecos[0].bairro;
          this.zipcode = this.socio.enderecos[0].cep;
        } else {
          this.address = "";
          this.city = "";
          this.neighborhood = "";
          this.zipcode = "";
        }
        if (this.socio.emails.length > 0) {
          this.email = this.socio.emails[0].valor;
        } else {
          this.email = "";
        }
      }
    },
    asyncFind(query) {
      this.multiselectLoading = true;
      this.ActionBuscarSociosPaginados({
        filtro: {
          nome: query,
        },
        pagina: 1,
        quantidade: 10,
        id: window.localStorage["id"],
      }).then((response) => {
        this.todos = response.results;
        this.socio = this.todos.find((s) => s.id == this.$route.params.id);
        this.multiselectLoading = false;
      });
    },
  },
  async mounted() {
    this.asyncFind(this.$route.params.nome);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cousine");

@font-face {
  font-family: "Contracts";
  src: url("/assets/fonts/Courier Prime.ttf");
}

@font-face {
  font-family: "Galatia-SIL-Bold";
  src: url("/assets/fonts/Galatia-SIL-Bold.ttf.woff") format("woff"),
    url("/assets/fonts/Galatia-SIL-Bold.ttf.svg#Galatia-SIL-Bold") format("svg"),
    url("/assets/fonts/Galatia-SIL-Bold.ttf.eot"),
    url("/assets/fonts/Galatia-SIL-Bold.ttf.eot?#iefix")
      format("embedded-opentype");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "Contracts", sans-serif;
  line-height: 2;
  font-size: 21px;
}

h2 {
  font-family: "Galatia-SIL-bold" !important;
}

.font-normal {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  text-align: justify;
  font-size: 23px;
  line-height: 2;
}

#logoIt {
  border: 2px solid #333;
  margin-bottom: 14px;
  padding: 0 7px;
  border-radius: 5px;
}

.ed-box {
  border: 6px solid black;
  padding: 10px;
  margin-top: 15px;
}

.border {
  border: 1px solid #333 !important;
}

.border-left {
  border-left: 1px solid #333 !important;
}

.border-right {
  border-right: 1px solid #333 !important;
}

.border-top {
  border-top: 1px solid #333 !important;
}

.border-bottom {
  border-bottom: 1px solid #333 !important;
}
</style>