import services from '@/http'
import * as types from './mutation-types'

export const ActionBuscarOcorrenciasPaginadasPorUsuario = ({ dispatch }, payload) => {
  if (payload.pagina == null)
    return
  return services.ocorrencias.buscarOcorrenciasPaginadasPorUsuario({}, payload).then(res => {
    dispatch('ActionConfigurarOcorrencias', res.data)
  })
}

export const ActionBuscarOcorrenciasAgendadas = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await services.ocorrencias.buscarOcorrenciasAgendadas({ id: payload });
      dispatch('ActionConfigurarOcorrenciasAgendadas', data)
      resolve(data)
    } catch (err) {
      reject(err)
    }
  })
}

export const ActionBuscarOcorrencia = ({commit}, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await services.ocorrencias.buscarOcorrencia({ id: payload });
      resolve(data);
    } catch (err) {
      reject(err);
    }
  })
}

export const ActionConfigurarOcorrenciasAgendadas = ({ commit }, payload) => {
  commit(types.CONFIGURAR_OCORRENCIAS_AGENDADAS, payload)
}

export const ActionBuscarDadosIniciais = ({ dispatch }) => {
  return services.ocorrencias.buscarDadosIniciais().then(res => {
    dispatch('ActionConfigurarDadosIniciais', res.data)
  })
}

export const ActionBuscarTiposDeContato = ({ dispatch }) => {
  return services.ocorrencias.buscarTiposDeContato().then(res => {
    dispatch('ActionConfigurarTiposDecontato', res.data)
  })
}

export const ActionConfigurarDadosIniciais = ({ commit }, payload) => {
  commit(types.CONFIGURAR_DADOS_INICIAIS, payload)
}

export const ActionConfigurarTiposDecontato = ({ commit }, payload) => {
  commit(types.CONFIGURAR_TIPOS_DE_CONTATO, payload)
}

export const ActionConfigurarOcorrencias = ({ commit }, payload) => {
  commit(types.CONFIGURAR_OCORRENCIAS, payload)
}

export const ActionExcluirOcorrencia = ({ commit }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.ocorrencias.excluirOcorrencia({ id: payload });
      commit(types.DELETAR_OCORRENCIA, payload)
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}

export const ActionAdicionarOcorrencia = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.ocorrencias.adicionarOcorrencia(payload);
      dispatch('ActionBuscarOcorrenciasPaginados', 1)
      dispatch('ActionBuscarDadosIniciais')
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}


export const ActionEditarOcorrencia = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.ocorrencias.editarOcorrencia({ id: payload.id }, payload);
      dispatch('ActionBuscarOcorrenciasPaginados', 1)
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}