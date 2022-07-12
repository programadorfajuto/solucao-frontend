import services from '@/http'
import * as types from './mutation-types'

export const ActionBuscarEnviosPaginados = ({ dispatch }, payload) => {
  if (payload.pagina == null)
    return
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await services.envioDeSms.buscarEnviosPaginados({}, payload);
      dispatch('ActionConfigurarEnviosPaginados', data);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}

export const ActionBuscarEnvios = ({ dispatch }) => {
  return services.envioDeSms.buscarEnvios().then(res => {
    dispatch('ActionConfigurarEnvios', res.data)
  })
}

export const ActionBuscarDadosIniciais = ({ dispatch }) => {
  return services.envioDeSms.buscarDadosIniciais().then(res => {
    dispatch('ActionConfigurarDadosIniciais', res.data)
  })
}

export const ActionConfigurarDadosIniciais = ({ commit }, payload) => {
  commit(types.CONFIGURAR_DADOS_INICIAIS, payload)
}

export const ActionConfigurarEnviosPaginados = ({ commit }, payload) => {
  commit(types.CONFIGURAR_ENVIOS_PAGINADOS, payload)
}

export const ActionConfigurarEnvios = ({ commit }, payload) => {
  commit(types.CONFIGURAR_ENVIOS, payload)
}

export const ActionExcluirEnvio = ({ commit }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.envioDeSms.excluirEnvio({ id: payload });
      commit(types.DELETAR_ENVIO, payload)
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}

export const ActionAdicionarEnvio = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.envioDeSms.adicionarEnvio(payload);
      dispatch('ActionBuscarEnviosPaginados', 1)
      dispatch('ActionBuscarDadosIniciais')
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}


export const ActionEditarEnvio = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.envioDeSms.editarEnvio({ id: payload.id }, payload);
      dispatch('ActionBuscarEnviosPaginados', 1)
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}