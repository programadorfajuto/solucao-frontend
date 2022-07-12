<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title mb-5">Filtro de Sócios sem operador</h4>
          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <label>Nome:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="nome" />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Cpf:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="cpf"
                    v-mask="'###.###.###-##'"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Título:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="titulo" />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Títular:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="titular" />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Origem:</label>
                <select class="form-control" v-model="origem">
                  <option value></option>
                  <option
                    v-for="item in origens"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Categoria:</label>
                <select class="form-control" v-model="categoria">
                  <option value></option>
                  <option
                    v-for="item in categorias"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label>Planilha:</label>
                <div class="input-group">
                  <div class="input-group-prepend bg-danger">
                    <span class="input-group-text bg-transparent">
                      <i class="text-white fa fa-user-circle"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" v-model="planilha" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <label>total de resultados: {{ paginados.rowCount }}</label>
          <button
            v-on:click="vincularOperador"
            class="btn btn-lg btn-success float-right"
            :disabled="selecionados.length == 0"
          >
            Vincular Selecionados
          </button>
          <router-link
            class="btn btn-lg btn-primary float-left mr-5"
            :to="`/usuarios/unassign/${this.$route.params.id}`"
          >
            <i class="mdi mdi-arrow-left"></i> Voltar
          </router-link>
          <loader-component v-if="carregando" />
          
          <table class="table table-striped table-responsive" v-else>
          <div class="row">
          <div class="col"></div>
            <div class="col">
              <div class="text-center">
                <button
                  v-on:click="
                    filtrar(
                      paginados.currentPage > 1
                        ? paginados.currentPage - 1
                        : null
                    )
                  "
                  class="btn btn-icons btn-rounded btn-primary"
                >
                  <i class="fa fa-chevron-left"></i>
                </button>
              </div>
            </div>
            <div class="col">
              <div class="text-center">
                <button
                  v-on:click="
                    filtrar(
                      paginados.currentPage < paginados.pageCount
                        ? paginados.currentPage + 1
                        : null
                    )
                  "
                  class="btn btn-icons btn-rounded btn-primary"
                >
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div class="col"></div>
          </div>
            <thead>
            
              <tr>
                <th>
                  <div class="form-check form-check-flat">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="selectAll"
                      />
                      Selecionar Todos
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </th>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Cpf/Cnpj</th>
                <th scope="col">Título</th>
                <th scope="col">Planilha</th>
                <th scope="col">Situação</th>
                <th scope="col">Origem</th>
                <th scope="col">Categoria</th>
                <th scope="col">Operador</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(socio,index) in sorteados" v-bind:key="socio.id">
                <td>
                  <div class="form-check form-check-flat">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="selecionados"
                        :value="socio.id"
                        number
                      />
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </td>
                <td>{{ (paginados.pageCount * (paginados.currentPage - 1)) + index + 1}}</td>
                <td>{{ socio.nome }}</td>
                <td>{{ socio.cpfCnpj }}</td>
                <td>{{ socio.titulo }}</td>
                <td>{{ socio.planilha }}</td>
                <td>{{ situacoes[Number(socio.ativo)] }}</td>
                <td>
                  {{
                    socio.origem != null
                      ? origens.find((o) => o.value == socio.origem).name
                      : "Sócio sem Origem"
                  }}
                </td>
                <td>
                  {{
                    socio.categoria != null
                      ? categorias.find((p) => p.value == socio.categoria).name
                      : "Sócio sem Categoria"
                  }}
                </td>
                <td>
                  {{ socio.operador ? socio.operador.nome : "Não designado" }}
                </td>
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
                  v-on:click="
                    filtrar(
                      paginados.currentPage > 1
                        ? paginados.currentPage - 1
                        : null
                    )
                  "
                  class="btn btn-icons btn-rounded btn-primary"
                >
                  <i class="fa fa-chevron-left"></i>
                </button>
              </div>
            </div>
            <div class="col">
              <div class="text-center">
                <button
                  v-on:click="
                    filtrar(
                      paginados.currentPage < paginados.pageCount
                        ? paginados.currentPage + 1
                        : null
                    )
                  "
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
import LoaderComponent from "@/components/LoaderComponent";
import constantes from "../../../constantes";

export default {
  components: {
    LoaderComponent,
  },
  data: () => ({
    carregando: true,
    perfis: constantes.perfil,
    situacoes: constantes.situacao,
    origens: constantes.origens,
    categorias: constantes.categorias,
    selecionados: [],
    model: {},
    filtro: {
      nome: "",
      cpf: "",
      titulo: "",
      origem: "",
      titular: "",
      categoria: "",
      planilha: "",
    },
    nome: "",
    cpf: "",
    titulo: "",
    origem: "",
    categoria: "",
    titular: "",
    planilha: "",
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("socios", ["paginados"]),
    sorteados: function() {
      return this.paginados.results != null ? this.paginados.results.sort((a, b) => a.nome.localeCompare(b.nome)) : [];
    },
    selectAll: {
      get: function () {
        return this.paginados.results
          ? this.selecionados.length == this.paginados.results.length
          : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.paginados.results.forEach(function (user) {
            selected.push(user.id);
          });
        }

        this.selecionados = selected;
      },
    },
  },
  methods: {
    ...mapActions("socios", [
      "ActionVincularOperador",
      "ActionBuscarSociosPaginados",
    ]),
    async vincularOperador() {
      try {
        this.carregando = true;
        this.model.id = this.$route.params.id;
        this.model.socios = this.selecionados;
        const mensagem = await this.ActionVincularOperador(this.model);
        await this.filtrar(1);
        this.$toasted.success(mensagem);
        this.carregando = false;
      } catch (err) {
        this.carregando = false;
        this.$toasted.error(
          err.data
            ? err.data.mensagem
            : "Não foi possível vincular estes sócios."
        );
      }
    },
    async filtrar(pagina) {
      this.carregando = true;
      this.filtro.nome = this.nome;
      this.filtro.planilha = this.planilha;
      this.filtro.titulo = this.titulo;
      this.filtro.origem = this.origem;
      this.filtro.cpf = this.cpf;
      this.filtro.titular = this.titular;
      await this.ActionBuscarSociosPaginados({
        filtro: this.filtro,
        pagina: pagina,
        quantidade: 500,
        id: null,
      });
      this.carregando = false;
    },
  },
  watch: {
    nome: function (val) {
      this.filtro.nome = val;
      this.filtrar(1);
    },
    titular: function (val) {
      this.filtro.titular = val;
      this.filtrar(1);
    },
    titulo: function (val) {
      this.filtro.titulo = val;
      this.filtrar(1);
    },
    origem: function (val) {
      this.filtro.origem = val;
      this.filtrar(1);
    },
    categoria: function (val) {
      this.filtro.categoria = val;
      this.filtrar(1);
    },
    cpf: function (val) {
      this.filtro.cpf = val;
      this.filtrar(1);
    },
    planilha: function (val) {
      this.filtro.planilha = val;
      this.filtrar(1);
    },
  },
  async mounted() {
    await this.filtrar(1);
    this.carregando = false;
  },
};
</script>