export default [{
    path: '/recibos',
    component: () => import(/* webpackChunkName: "recibos" */ './pages/Index'),
    children: [
        {
            name: 'recibos-list',
            path: '',
            component: () => import(/* webpackChunkName: "recibos-list" */ './pages/List'),
        },
        // {
        //     name: 'primeira-etapa-itiquira',
        //     path: 'primeira-etapa-itiquira',
        //     component: () => import(/* webpackChunkName: "primeira-etapa-itiquira" */ './pages/itiquira/PrimeiraEtapa'),
        // },
        // {
        //     name: 'segunda-etapa-itiquira',
        //     path: 'segunda-etapa-itiquira',
        //     component: () => import(/* webpackChunkName: "segunda-etapa-itiquira" */ './pages/itiquira/SegundaEtapa'),
        // },
        // {
        //     name: 'primeira-e-segunda-etapa-itiquira',
        //     path: 'primeira-e-segunda-etapa-itiquira',
        //     component: () => import(/* webpackChunkName: "primeira-e-segunda-etapa-itiquira" */ './pages/itiquira/PrimeiraESegundaEtapa'),
        // },
        // {
        //     name: 'edital-de-vendas-itiquira',
        //     path: 'edital-de-vendas-itiquira',
        //     component: () => import(/* webpackChunkName: "edital-de-vendas-itiquira" */ './pages/itiquira/EditalDeVendas'),
        // },
        {
            name: 'termo-de-cancelamento-itiquira',
            path: 'termo-de-cancelamento-itiquira',
            component: () => import(/* webpackChunkName: "termo-de-cancelamento-itiquira" */ './pages/itiquira/TermoDeCancelamentoItiquira'),
        },
        // {
        //     name: 'primeira-fase-termas',
        //     path: 'primeira-fase-termas',
        //     component: () => import(/* webpackChunkName: "primeira-fase-termas" */ './pages/termas/PrimeiraFase'),
        // },
        // {
        //     name: 'segunda-fase-termas',
        //     path: 'segunda-fase-termas',
        //     component: () => import(/* webpackChunkName: "segunda-fase-termas" */ './pages/termas/SegundaFase'),
        // },
        // {
        //     name: 'primeira-e-segunda-fase-termas',
        //     path: 'primeira-e-segunda-fase-termas',
        //     component: () => import(/* webpackChunkName: "primeira-e-segunda-fase-termas" */ './pages/termas/PrimeiraESegundaFase'),
        // },
        // {
        //     name: 'edital-de-vendas-termas',
        //     path: 'edital-de-vendas-termas',
        //     component: () => import(/* webpackChunkName: "edital-de-vendas-termas" */ './pages/termas/EditalDeVendas'),
        // },
        {
            name: 'termo-de-cancelamento-termas',
            path: 'termo-de-cancelamento-termas',
            component: () => import(/* webpackChunkName: "termo-de-cancelamento-termas" */ './pages/termas/TermoDeCancelamentoTermas'),
        },
         {
            name: 'certidao-negativa-de-debitos-falecido',
            path: 'certidao-negativa-de-debitos-falecido',
            component: () => import(/* webpackChunkName: "certidao-negativa-de-debitos-falecido" */ './pages/itiquira/CertidaoNegativaDeDebitosFalecido'),
        },

         {
            name: 'certidao-termas',
            path: 'certidao-termas',
            component: () => import(/* webpackChunkName: "certidao-termas" */ './pages/termas/CertidaoTermas'),
        },
         {
            name: 'confissao-de-divida-itiquira',
            path: 'confissao-de-divida-itiquira',
            component: () => import(/* webpackChunkName: "confissao-de-divida-itiquira" */ './pages/itiquira/ConfissaoDeDividaItiquira'),
        },
         {
            name: 'termo-de-atualizacao-de-manutencao',
            path: 'termo-de-atualizacao-de-manutencao',
            component: () => import(/* webpackChunkName: "termo-de-atualizacao-de-manutencao" */ './pages/itiquira/TermoDeAtualizacaoDeManutencao'),
        },
        {
            name: 'termo-de-confissao-de-divida',
            path: 'termo-de-confissao-de-divida',
            component: () => import(/* webpackChunkName: "termo-de-confissao-de-divida" */ './pages/termas/TermoDeConfissaoDeDivida'),
        },
        
    ]
}]