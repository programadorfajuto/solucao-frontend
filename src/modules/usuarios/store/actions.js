import services from '@/http'
import * as types from './mutation-types'

export const ActionBuscarUsuariosPaginados = ({ dispatch }, payload) => {
  if (payload.pagina == null)
    return
  return services.usuarios.buscarUsuariosPaginados({}, payload).then(res => {
    dispatch('ActionConfigurarUsuariosPaginados', res.data)
  })
}

export const ActionBuscarUsuarios = ({dispatch}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await services.usuarios.buscarUsuarios();
      dispatch('ActionConfigurarUsuarios', data)
      resolve(data)
    } catch (err) {
      reject(err)
    }
  })
}

export const ActionBuscarDadosIniciais = ({ dispatch }) => {
  return services.usuarios.buscarDadosIniciais().then(res => {
    dispatch('ActionConfigurarDadosIniciais', res.data)
  })
}

export const ActionConfigurarDadosIniciais = ({ commit }, payload) => {
  commit(types.CONFIGURAR_DADOS_INICIAIS, payload)
}

export const ActionConfigurarUsuariosPaginados = ({ commit }, payload) => {
  commit(types.CONFIGURAR_USUARIOS_PAGINADOS, payload)
}

export const ActionConfigurarUsuarios = ({ commit }, payload) => {
  commit(types.CONFIGURAR_USUARIOS, payload)
}

export const ActionExcluirUsuario = ({ commit }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.usuarios.excluirUsuario({ id: payload });
      commit(types.DELETAR_USUARIO, payload)
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}

export const ActionAdicionarUsuario = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.usuarios.adicionarUsuario(payload);
      dispatch('ActionBuscarUsuariosPaginados', 1)
      dispatch('ActionBuscarDadosIniciais')
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}


export const ActionEditarUsuario = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { mensagem } } = await services.usuarios.editarUsuario({ id: payload.id }, payload);
      dispatch('ActionBuscarUsuariosPaginados', 1)
      resolve(mensagem)
    } catch (err) {
      reject(err)
    }
  })
}