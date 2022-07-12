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
          </div>
          <div class="row mt-3">
            <div class="col-md-3">
              <div class="form-group">
                <label for="telephone">Ônus</label>
                <input type="text" v-model="onus" class="form-control" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="address">Valor</label>
                <input type="text" v-model="valor" class="form-control" />
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
                <!-- <img src="/img/logo-solucao.svg" width="350" class="float-left no-print" id="logoSol"
                alt="Logo Solução">-->
                <!-- <img
                  src="@/assets/images/Termas.svg"
                  class="float-right"
                  id="logoIt"
                  alt="Logo Itiquira Park"
                  style="width: 600px"
                /> -->
              </div>
              <div class="col">
                <h3 class="text-center font-normal">
                  <u>
                    <b
                      >INSTRUMENTO PARTICULAR DE CONFISSÃO E ASSUNÇÃO DE
                      DÍVIDA</b
                    >
                  </u>
                </h3>
                <br />
                <!-- <h5>
                  <u>
                    <b>n° serie: {{ numberSerie }}</b>
                  </u>
                </h5> -->
              </div>
            </div>
            <div class="mb-5">
              <div class="col-sm-12">
                <!-- FORMOSA-GO,
                <b>{{ date }}</b> -->
                <p>
                  <b> CREDOR: SOLUÇÃO ÚTIL ASSESSORIA E COBRANÇAS EIRELI - ME</b
                  >, pessoa jurídica de direito, situada à Av. Mazzei n° 189,
                  Villa Mazzei, São Paulo - SP, inscrita no CNPJ sob o nº
                  15.798.326/0001-83.
                </p>
                <p>
                  <b>
                    DEVEDOR: ({{ name }}), ({{ nationality }}), ({{
                      civilState
                    }}), ({{ ocupation }}),</b
                  >
                  portador da cédula de identidade R.G. nº <b>{{ rg }}</b> e
                  CPF/MF nº <b>{{ cpf }}</b
                  >, residente e domiciliado na
                  <b
                    >({{ street }}), ({{ number }}), ({{ neighborhood }}), ({{
                      cep
                    }}), ({{ city }}), ({{ state }}).</b
                  >
                </p>
                <p>
                  Pelo presente Instrumento particular e na melhor forma de
                  direito, o DEVEDOR confessa e assume como líquida e certa a
                  dívida a seguir descrita:
                </p>
                <p>
                  <b> CLÁUSULA PRIMEIRA</b>: Ressalvadas quaisquer outras
                  obrigações aqui não incluídas, pelo presente instrumento e na
                  melhor forma de direito, o DEVEDOR reconhece e confessa, por
                  livre e espontânea vontade, sem coação de quem quer que seja,
                  possuir uma dívida líquida, certa e exigível em favor do
                  CREDOR, consubstanciada no montante total de R$
                  <b>{{ firstValue }}</b
                  >.
                </p>
                <p>
                  <b>Parágrafo Primeiro</b>: A dívida acima citada refere-se à
                  obrigação do DEVEDOR, na condição de sócio da Empresa ESTÂNCIA
                  ÁGUAS DO ITIQUIRA, relativamente à taxa instituída por meio da
                  Assembleia realizada na data de {{ date }}, com todas as
                  cominações legais (multa, juros, etc.) já incluídos; sendo
                  que, desde já, o DEVEDOR também reconhece a legalidade e
                  validade da Assembleia, concordando integralmente com seus
                  termos, razão porque o DEVEDOR reconhece a dívida como de boa
                  origem e devida, nada se opondo em relação a ela, renunciando
                  expressamente a qualquer contestação quanto ao valor e
                  procedência da dívida.
                </p>
                <p>
                  <b> Parágrafo Segundo</b>: O crédito objeto do presente
                  instrumento foi cedido pela ESTÂNCIA ÁGUAS DO ITIQUIRA à
                  SOLUÇÃO ÚTIL ASSESSORIA E COBRANÇAS EIRELI - ME, nos termos do
                  artigo 286 e seguintes do Código Civil Brasileiro, declarando
                  o DEVEDOR, desde já, ciente da Cessão e com ela concordando,
                  estando, pois, devidamente notificado, nos termos do artigo
                  290 do Código Civil.
                </p>
                <p>
                  <b> CLÁUSULA SEGUNDA</b>: As partes acordam que,
                  exclusivamente para pagamento nos moldes descritos nesta
                  CLÁUSULA, nas datas e valores ora definidos, o valor ora
                  confessado poderá ser quitado pela quantia de R$ {{ value }},
                  com pagamento a ser efetuado por meio de {{ plots }} parcelas,
                  conforme ora descrito:
                </p>
                <p>
                  1ª parcela no valor de R$_____ (_______), com vencimento em
                  _________.
                </p>
                <p>
                  2ª parcela no valor de R$_____ (_______), com vencimento em
                  _________.
                </p>
                <p>
                  3ª parcela no valor de R$_____ (_______), com vencimento em
                  _________.
                </p>
                <p>
                  4ª parcela no valor de R$_____ (_______), com vencimento em
                  _________.
                </p>
                <p>
                  5ª parcela no valor de R$_____ (_______), com vencimento em
                  _________.
                </p>
                <p>
                  <b> CLÁUSULA TERCEIRA</b>
                  : O pagamento das parcelas descritas na CLÁUSULA SEGUNDA será
                  efetuado impreterivelmente nas datas e valores ali definidos,
                  por meio de {{ thirdField }}.
                </p>
                <p>
                  <b> Parágrafo Único</b>: O não pagamento de qualquer parcela
                  no seu vencimento e na forma ora acordada importará na
                  anulação do acordo de pagamento definido na CLÁUSULA SEGUNDA,
                  sujeitando o DEVEDOR ao pagamento do valor integral do débito
                  confessado e reconhecido na CLÁUSULA PRIMEIRA, sobre o qual
                  incidirá a aplicação de multa de 10%, juros de mora de 1% ao
                  mês e correção monetária e mais custas processuais e
                  honorários advocatícios desde já fixados na base de 20% sobre
                  o valor total do débito, que poderá ser executado.
                </p>
                <p>
                  <b>CLÁUSULA TERCEIRA</b>: À DÍVIDA ora reconhecida e assumida
                  pelo DEVEDOR, como líquida, certa e exigível, no valor acima
                  mencionado, aplica-se o disposto no artigo 784, III, do Código
                  de Processo Civil Brasileiro, haja vista o caráter de título
                  executivo extrajudicial do presente instrumento de confissão
                  de dívida.
                </p>
                <p>
                  <b> CLÁUSULA QUARTA</b>: A eventual tolerância à infringência
                  de quaisquer das cláusulas deste instrumento ou o não
                  exercício de quaisquer direitos nele previsto constituirá mera
                  liberalidade, não implicando em renúncia, perdão, novação ou
                  transação de qualquer espécie.
                </p>
                <p>
                  <b> CLÁUSULA QUINTA</b>: O presente instrumento é feito em
                  caráter irrevogável e irretratável e suas cláusulas prevalecem
                  sobre qualquer entendimento ou compromisso pactuado
                  anteriormente entre as partes em relação a esta dívida,
                  respondendo por ele, seus herdeiros e sucessores.
                </p>
                <p>
                  Para dirimir qualquer dúvida oriunda deste instrumento fica
                  eleito o Foro de Formosa, com exclusão de qualquer outro, por
                  mais privilegiado que seja.
                </p>
                <p>
                  Isto posto, por estarem justos e contratados, as partes firmam
                  este instrumento em 2 (duas) vias de igual teor, na presença
                  de duas testemunhas.
                </p>
                <p style="text-align:center">
                  Formosa/GO,
                  {{ date }}
                </p>

                <div class="text-center">
                  <p style="text-align: center">
                    __________________________________
                  </p>
                  <p style="text-align: center">
                    <b
                      >SOLUÇÃO ÚTIL ASSESSORIA E COBRANÇAS EIRELI - ME CREDOR
                    </b>
                  </p>

                  <div class="text-center">
                    <p style="text-align: center">
                      __________________________________
                    </p>
                    <p style="text-align: center">
                      <b>
                        <u>DEVEDOR</u>
                      </b>
                    </p>
                  </div>
                  <div class="text-center">
                    <p style="text-align: center">
                      __________________________________
                    </p>
                    <p style="text-align: center">
                      <b>
                        <u>DEVEDOR – CIENTE/NOTIFICADO DA CESSÃO DE CRÉDITO</u>
                      </b>
                    </p>
                  </div>
                </div>
                <p>Testemunhas:</p>
              </div>
            </div>

            <div style="width: 100%; font-size: 14px" class="mt-5">
              <p>
                __________________________________
              </p>
              <p>
                <b>RG:</b>
                <br />
                <b>CPF:</b>
              </p>
              <p class="mt-4">
                __________________________________
              </p>
              <p>
                <b>RG:</b>
                <br />
                <b>CPF:</b>
              </p>
            </div>

            <!-- <div class="row" style="font-size:14px;">
              <div class="col">
                <div class="text-center">
                  <p style="text-align: center;">__________________________________________</p>
                  <p style="text-align: center;">
                    <b>Termas Solar Hotel Clube</b>
                  </p>

                  <p style="text-align: center;">
                    <b>
                      <span style="font-size: 25px;">S</span>olução Assessoria de Cobrança
                      <br />
                      <span class="ml-3">CNPJ: 15.798.326/0001-83</span>
                    </b>
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="text-center">
                  <p style="text-align: center;">__________________________________________</p>
                  <p style="text-align: center;">
                    <b>
                      <u>Titular ou Responsável</u>
                    </b>
                  </p>
                </div>
              </div>
            </div>-->
            <!-- <div class="row">
              <div class="col-2"></div>
              <div class="col-8 mt-3 text-center">
                <b
                  style="text-transform:uppercase;"
                >Este recibo só terá validade a partir do pagamento das parcelas, sejam elas cheque, cartão ou outros.</b>
              </div>
              <div class="col-2"></div>
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
      name: "",
      thirdField: "",
      nationality: "",
      civilState: "",
      ocupation: "",
      date: date.format("LL"),
      numberSerie: Math.random() + 1,
      numberContract: "",
      cpf: "",
      onus: "sem ônus",
      operator: "",
      firstValue: "00,00",
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
        this.valor = this.socio.valor;
        this.numberContract = this.socio.titulo;
        if (this.socio.telefones.length > 0) {
          this.telephone =
            "(" +
            this.socio.telefones[0].ddd +
            ") " +
            this.socio.telefones[0].valor;
        }
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
  font-size: 20px;
}

h2 {
  font-family: "Galatia-SIL-bold";
}

.font-normal {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  text-align: justify;
  font-size: 20px;
  line-height: 1.7;
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
