export default [{
    path: '/ocorrencias',
    component: () => import(/* webpackChunkName: "ocorrencias" */ './pages/Index'),
    children: [
        {
            name: 'ocorrencias-list',
            path: '',
            component: () => import(/* webpackChunkName: "ocorrencias-list" */ './pages/List'),
        },
        {
            name: 'ocorrencias-create',
            path: 'create',
            component: () => import(/* webpackChunkName: "ocorrencias-create" */ './pages/Create'),
        },
        {
            name: 'ocorrencias-edit',
            path: 'edit/:id',
            component: () => import(/* webpackChunkName: "ocorrencias-edit" */ './pages/Edit'),
        },
        {
            name: 'ocorrencias-view',
            path: ':id',
            component: () => import(/* webpackChunkName: "ocorrencias-view" */ './pages/View'),
        }
    ]
}]