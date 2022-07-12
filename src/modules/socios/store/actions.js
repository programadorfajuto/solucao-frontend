import services from "@/http";
import * as types from "./mutation-types";

export const ActionBuscarSociosPaginados = ({ dispatch }, payload) => {
  if (payload.pagina == null) return;

  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await services.socios.buscarSociosPaginados({}, payload);
      dispatch("ActionConfigurarSociosPaginados", data);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

export const ActionImportacao = ({ commit }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await services.socios.buscarImportacao();
      commit(types.CONFIGURAR_IMPORTACAO, data);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

export const ActionBuscarDadosIniciais = ({ dispatch }) => {
  return services.socios.buscarDadosIniciais().then((res) => {
    dispatch("ActionConfigurarDadosIniciais", res.data);
  });
};

export const ActionConfigurarDadosIniciais = ({ commit }, payload) => {
  commit(types.CONFIGURAR_DADOS_INICIAIS, payload);
};

export const ActionConfigurarSociosPaginados = ({ commit }, payload) => {
  commit(types.CONFIGURAR_SOCIOS_PAGINADOS, payload);
};

export const ActionConfigurarSocio = ({ commit }, payload) => {
  commit(types.CONFIGURAR_SOCIO, payload);
};

export const ActionConfigurarSocios = ({ commit }, payload) => {
  commit(types.CONFIGURAR_SOCIOS, payload);
};

export const ActionExcluirSocio = ({ commit }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: { mensagem },
      } = await services.socios.excluirSocio({ id: payload });
      commit(types.DELETAR_SOCIO, payload);
      resolve(mensagem);
    } catch (err) {
      reject(err);
    }
  });
};

export const ActionBuscarSocio = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await services.socios.buscarSocio({ id: payload });
      dispatch("ActionConfigurarSocio", data);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

export const ActionBuscarSocios = ({ dispatch }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await services.socios.buscarSocios();
      dispatch("ActionConfigurarSocios", data);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

export const ActionAdicionarSocio = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: { mensagem },
      } = await services.socios.adicionarSocio(payload);
      dispatch("ActionBuscarSociosPaginados", 1);
      dispatch("ActionBuscarDadosIniciais");
      resolve(mensagem);
    } catch (err) {
      reject(err);
    }
  });
};

export const ActionEditarSocio = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: { mensagem },
      } = await services.socios.editarSocio({ id: payload.id }, payload);
      dispatch("ActionBuscarSociosPaginados", 1);
      resolve(mensagem);
    } catch (err) {
      reject(err);
    }
  });
};

export const ActionDesvincularOperador = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: { mensagem },
      } = await services.socios.desvincularOperador(
        { id: payload.id },
        payload
      );
      dispatch("ActionBuscarSociosPaginados", 1);
      resolve(mensagem);
    } catch (err) {
      reject(err);
    }
  });
};

export const ActionVincularOperador = ({ dispatch }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: { mensagem },
      } = await services.socios.vincularOperador({ id: payload.id }, payload);
      dispatch("ActionBuscarSociosPaginados", 1);
      resolve(mensagem);
    } catch (err) {
      reject(err);
    }
  });
};
