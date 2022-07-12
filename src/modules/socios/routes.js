export default [{
    path: '/socios',
    component: () => import(/* webpackChunkName: "socios" */ './pages/Index'),
    children: [
        {
            name: 'socios-list',
            path: '',
            component: () => import(/* webpackChunkName: "socios-list" */ './pages/List'),
        },
        {
            name: 'socios-create',
            path: 'create',
            component: () => import(/* webpackChunkName: "socios-create" */ './pages/Create'),
        },
        {
            name: 'socios-edit',
            path: 'edit/:id',
            component: () => import(/* webpackChunkName: "socios-edit" */ './pages/Edit'),
        },
        {
            name: 'socios-view',
            path: ':id',
            component: () => import(/* webpackChunkName: "socios-view" */ './pages/View'),
        }
    ]
}]