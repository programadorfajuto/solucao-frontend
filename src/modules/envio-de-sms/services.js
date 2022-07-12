export default {
  buscarEnviosPaginados: { method: 'post', url: 'sms/paginated' },
  buscarEnvios: { method: 'get', url: 'sms' },
  buscarDadosIniciais: { method: 'get', url: 'sms/data' },
  excluirEnvio: { method: 'delete', url: 'sms{/id}' },
  adicionarEnvio: { method: 'post', url: 'sms' },
  editarEnvio: { method: 'put', url: 'sms{/id}' }
}
