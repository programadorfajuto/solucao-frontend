export default {
  buscarSociosPaginados: { method: "post", url: "socios/filtered/paginated" },
  buscarSocios: { method: "get", url: "socios" },
  buscarDadosIniciais: { method: "get", url: "socios/data" },
  buscarSocio: { method: "get", url: "socios{/id}" },
  excluirSocio: { method: "delete", url: "socios{/id}" },
  adicionarSocio: { method: "post", url: "socios" },
  editarSocio: { method: "put", url: "socios{/id}" },
  desvincularOperador: { method: "post", url: "socios/desvincular{/id}" },
  vincularOperador: { method: "post", url: "socios/vincular{/id}" },
  buscarImportacao: { method: "get", url: "importacao" },
};
