import * as types from './mutation-types'

export default {
  [types.CONFIGURAR_DASHBOARD](state, payload) {
    state.dados = payload
  }
}