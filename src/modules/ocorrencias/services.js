export default {
    buscarOcorrenciasPaginadasPorUsuario: { method: 'post', url: 'ocorrencias/filtered/paginated' },
    buscarOcorrenciasAgendadas: {method: 'get', url: 'ocorrencias/agendadas/usuario{/id}'},
    buscarOcorrencia: {method: 'get', url: 'ocorrencias{/id}' },
    buscarDadosIniciais: { method: 'get', url: 'ocorrencias/data' },
    buscarTiposDeContato: {method: 'get', url: 'ocorrencias/contact'},
    excluirOcorrencia: { method: 'delete', url: 'ocorrencias{/id}' },
    adicionarOcorrencia: { method: 'post', url: 'ocorrencias' },
    editarOcorrencia: { method: 'put', url: 'ocorrencias{/id}' }
}