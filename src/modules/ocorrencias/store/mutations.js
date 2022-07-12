import * as types from './mutation-types'

export default {
  [types.CONFIGURAR_OCORRENCIAS](state, payload) {
    state.paginados = payload
  },
  [types.DELETAR_OCORRENCIA](state, payload) {
    let index = state.paginados.results.findIndex(u => u.id == payload)
    state.paginados.results.splice(index, 1)
  },
  [types.CONFIGURAR_DADOS_INICIAIS](state, payload) {
    state.dados = payload
  },
  [types.CONFIGURAR_TIPOS_DE_CONTATO](state, payload) {
    state.tiposDeContato = payload
  },
  [types.CONFIGURAR_OCORRENCIAS_AGENDADAS](state, payload) {
    state.agendadas = payload
  },
}
