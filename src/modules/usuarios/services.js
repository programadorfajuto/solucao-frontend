export default {
  buscarUsuariosPaginados: { method: 'post', url: 'usuarios/filtered/paginated' },
  buscarUsuarios: { method: 'get', url: 'usuarios' },
  buscarDadosIniciais: { method: 'get', url: 'usuarios/data' },
  excluirUsuario: { method: 'delete', url: 'usuarios{/id}' },
  adicionarUsuario: { method: 'post', url: 'usuarios' },
  editarUsuario: { method: 'put', url: 'usuarios{/id}' }
}
