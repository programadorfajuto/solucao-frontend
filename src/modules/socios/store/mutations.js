import * as types from "./mutation-types";

export default {
  [types.CONFIGURAR_SOCIOS_PAGINADOS](state, payload) {
    state.paginados = payload;
  },
  [types.CONFIGURAR_SOCIOS](state, payload) {
    state.todos = payload;
  },
  [types.CONFIGURAR_SOCIO](state, payload) {
    state.model = payload;
  },
  [types.DELETAR_SOCIO](state, payload) {
    let index = state.paginados.results.findIndex((u) => u.id == payload);
    state.paginados.results.splice(index, 1);
  },
  [types.CONFIGURAR_DADOS_INICIAIS](state, payload) {
    state.dados = payload;
  },
  [types.CONFIGURAR_IMPORTACAO](state, payload) {
    state.importacao = payload;
  },
};
