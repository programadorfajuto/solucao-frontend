import services from '@/http'
import * as types from './mutation-types'

export const ActionBuscarDadosIniciais = ({ dispatch }) => {
  return services.dashboard.buscarDadosIniciais().then(res => {
    dispatch('ActionConfigurarDashboard', res.data)
  })
}

export const ActionConfigurarDashboard = ({ commit }, payload) => {
  commit(types.CONFIGURAR_DASHBOARD, payload)
}