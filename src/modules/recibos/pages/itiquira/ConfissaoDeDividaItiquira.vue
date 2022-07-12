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
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  v-if="editarNomeSocio"
                />
                <multiselect
                  v-else
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
              <div>
                <button
                  class="btn btn-sm btn-primary"
                  v-on:click="editarNomeSocio = !editarNomeSocio"
                >
                  <i class="mdi mdi-pencil"></i>
                </button>
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
                <label for="newName">Nome novo Titular</label>
                <input type="text" v-model="newName" class="form-control" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="newCpf">CPF do novo Titular</label>
                <input type="text" v-model="newCpf" class="form-control" />
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
                <label for="reference">Referente a:</label>
                <input type="text" v-model="reference" class="form-control" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="valueTyped">Valor por Extenso</label>
                <input type="text" v-model="valueTyped" class="form-control" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="typePayment">Formas de pagamento:</label>
                <select v-model="typePayment" multiple class="form-control">
                  <option
                    v-for="payment in typePayments"
                    :value="payment.value"
                    :key="payment.value"
                  >
                    {{ payment.value }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="plot">Parcela:</label>
                <input type="text" v-model="plot" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-3">
              <div class="form-group">
                <label for="telephone">Telefone</label>
                <input type="text" v-model="telephone" class="form-control" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="address">Endereço</label>
                <input type="text" v-model="address" class="form-control" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="city">Cidade</label>
                <input type="text" v-model="city" class="form-control" />
              </div>
            </div>
            <!-- <div class="col-md-3">
              <div class="form-group">
                <label for="email">E-mail</label>
                <input type="text" v-model="email" class="form-control" />
              </div>
            </div> -->
            <div class="col-md-3">
              <div class="form-group">
                <label for="neighborhood">Bairro</label>
                <input
                  type="text"
                  v-model="neighborhood"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="zipcode">CEP</label>
                <input type="text" v-model="zipcode" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-3">
              <div class="form-group">
                <label for="operator">Operador</label>
                <input type="text" v-model="operator" class="form-control" />
              </div>
            </div>
            <!-- <div class="col-md-3">
              <div class="form-group">
                <label for="operator">Número de convites</label>
                <input type="number" v-model="dayUser" class="form-control" />
              </div>
            </div> -->
            <!-- <div class="col-md-3">
              <div class="form-group">
                <label for="operator">Número de diárias</label>
                <input type="number" v-model="diarias" class="form-control" />
              </div>
            </div> -->
            <div class="col-md-3">
              <div class="form-group">
                <label for="operator">Data</label>
                <input type="text" v-model="date" class="form-control" />
              </div>
            </div>
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
                <!-- <img
                  src="@/assets/images/logo-solucao.svg"
                  width="350"
                  class="float-left no-print"
                  id="logoSol"
                  alt="Logo Solução"
                />-->
                <img
                  src="@/assets/images/ItiquiraPark.svg"
                  class="float-right"
                  id="logoIt"
                  alt="Logo Itiquira Park"
                />
                <div class="float-right">
                  <h2>
                    <u>
                      <b>RECIBO DE CONFISSÃO DE DÍVIDA</b>
                    </u>
                  </h2>
                  <h5 style="text-align:right">
                    <u>
                      <b>n° serie: {{ numberSerie }}</b>
                    </u>
                  </h5>
                </div>
                <!-- <div class="float-left">
                  <h5>
                    <u>
                      <b>CNPJ: 15.798.326/0001-83</b>
                    </u>
                  </h5>
                </div> -->
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12" style="font-size: 26px">
                <b> Formosa, {{ date }}</b>
                <p>
                  Declaramos para os devidos fins que o(a) SR(a)
                  <b style="text-transform: uppercase">{{
                    name ? name : " NOME_DO_SOCIO"
                  }}</b>
                  <b> CPF: {{ cpf }}, Contrato Nº {{ numberContract }} está </b>
                  quitando a parcela referente do acordo firmado com a Solução
                  Útil Assessoria e ao ITIQUIRA PARK no valor de R$
                  {{ value }},
                  <b>parcela: N° {{ plot ? plot : "_____/____" }}.</b>
                </p>

                <p>
                  <b>
                    Forma de pagamento:
                    {{ typePayment.toString() }}
                  </b>
                </p>

                <p>
                  <b
                    >(&nbsp;&nbsp;&nbsp;&nbsp;) DEPOSITO
                    &nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;) TED
                    &nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;)PIX
                    &nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;)DINHEIRO
                    &nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;)OUTROS</b
                  >
                </p>
                <!-- <p>
                  <b>GANHA COMO BONIFICAÇÃO:</b>
                </p>
                <p class="pl-4">
                  <b>
                    (&nbsp;&nbsp;&nbsp;&nbsp;)
                    <u>
                      CONFECÇÃO GRATUITA DOS CARTÕES DE ACESSO DO SÓCIO E
                      DEPENDENTES DECLARADOS DO ANO DE {{ years }}.
                    </u>
                    <br />(<small>até 5 opções</small>)
                    <u>DIÁRIA DE HOTEL PARA CASAL, RESERVA (61)39646482.</u>
                    <br />(<small>até 25 convites</small>)
                    <u>CONVITES DAY USER.</u>
                  </b>
                </p> -->
              </div>
            </div>

            <div class="row">
              <div class="col">
                <p v-if="telephone != ''" style="margin-bottom: 0">
                  <b>TELEFONE:</b>
                  {{ telephone }}
                </p>
                <p v-if="address != ''" style="margin-bottom: 0">
                  <b>ENDEREÇO:</b>
                  {{ address }}
                </p>
                <p v-if="neighborhood != ''" style="margin-bottom: 0">
                  <b>BAIRRO:</b>
                  {{ neighborhood }}
                </p>
                <p v-if="city != ''" style="margin-bottom: 0">
                  <b>CIDADE:</b>
                  {{ city }}
                </p>
                <p v-if="zipcode != ''" style="margin-bottom: 0">
                  <b>CEP:</b>
                  {{ zipcode }}
                </p>
              </div>
            </div>

            <!-- <div style="width: 100%; font-size: 14px" class="mt-5">
              <div style="float: left; width: 50%">
                <div class="text-center">
                  <p style="text-align: center">
                    __________________________________
                  </p>
                  <p style="text-align: center; text-transform: uppercase">
                    <b>{{ operator }}</b>
                  </p>
                  <p style="text-align: center; margin-top: -20px">
                    <b>
                      <u> SOLUÇÃO ÚTIL ASSESSORIA </u>
                    </b>
                  </p>
                </div>
              </div>
              <div style="float: left; width: 50%">
                <div class="text-center">
                  <p style="text-align: center">
                    __________________________________
                  </p>
                  <p style="text-align: center; text-transform: uppercase">
                    <B>{{ name }}</B>
                  </p>
                  <p style="text-align: center">
                    <b>
                      <u>RESPONSÁVEL/SÓCIO</u>
                    </b>
                  </p>
                </div>
              </div>
              <br style="clear: left" />
            </div> -->

            <div class="row mt-5" style="font-size:15px;">
              <div class="col" style="min-height:50%">
                <div class="text-center">
                  <p style="text-align: center;">
                    ______________________________________
                  </p>
                  <p style="text-align: center;text-transform: uppercase;">
                    <b>{{ operator }}</b>
                  </p>
                  <p style="text-align: center;">
                    <b>
                      <u>
                        SOLUÇÃO ASSESSORIA DE COBRANÇA
                      </u>
                    </b>
                  </p>
                  <p style="text-align: center;">
                    <b>
                      <u>
                        <span class="ml-3">CNPJ: 15.798.326/0001-83</span>
                      </u>
                    </b>
                  </p>
                  <p style="text-align: center;">
                    <b>
                      <u>
                        ESTÂNCIA ÁGUAS DO ITIQUIRA
                      </u>
                    </b>
                  </p>
                  <p style="text-align: center;">
                    <b>
                      <u>
                        <span class="ml-3">CNPJ: 02.551.257/0001-67</span>
                      </u>
                    </b>
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="text-center">
                  <p style="text-align: center;">
                    ______________________________________
                  </p>
                  <p style="text-align: center;text-transform: uppercase;">
                    <B>{{ newName }}</B>
                  </p>
                  <p style="text-align: center;">
                    <b>
                      <u>SÓCIO TITULAR OU RESPONSÁVEL</u>
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="row">
              <div
                class="col mt-3"
              >Este recibo só terá validade a partir do pagamento das parcelas, sejam elas cheque, cartão ou outros.</div>
            </div>-->
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
      editarNomeSocio: false,
      name: "",
      newName: "",
      reference: "",
      date: date.format("LL"),
      numberSerie: Math.random() + 1,
      numberContract: "",
      cpf: "",
      newCpf: "",
      value: 0,
      years: "",
      valueTyped: "",
      typePayment: ["Selecione a forma"],
      typePayments: [
        {
          value: " À vista",
        },
        {
          value: " Cartão",
        },
        {
          value: " Cheque",
        },
        {
          value: " Depósito",
        },
        {
          value: " TED",
        },
        {
          value: " PIX",
        },
        {
          value: " Dinheiro",
        },
        {
          value: " Outros",
        },
      ],
      plot: "",
      telephone: "",
      address: "",
      city: "",
      neighborhood: "",
      zipcode: "",
      operator: "",
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
  font-family: "Galatia-SIL-bold";
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
