import * as types from './mutation-types'

export default {
  [types.CONFIGURAR_USUARIOS_PAGINADOS](state, payload) {
    state.paginados = payload
  },
  [types.CONFIGURAR_USUARIOS](state, payload) {
    state.todos = payload
  },
  [types.DELETAR_USUARIO](state, payload) {
    let index = state.paginados.results.findIndex(u => u.id == payload)
    state.paginados.results.splice(index, 1)
  },
  [types.CONFIGURAR_DADOS_INICIAIS](state, payload){
    state.dados = payload
  }
}
