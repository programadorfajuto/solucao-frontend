export default [
  {
    path: '/envio-de-sms',
    component: () => import(/* webpackChunkName: "envio-de-sms" */ './pages/Index'),
    children: [
      {
        name: 'envio-de-sms-list',
        path: '',
        component: () => import(/* webpackChunkName: "envio-de-sms-list" */ './pages/List'),
      },
      {
        name: 'envio-de-sms-create',
        path: 'create',
        component: () => import(/* webpackChunkName: "envio-de-sms-create" */ './pages/Create'),
      },
      {
        name: 'envio-de-sms-edit',
        path: 'edit/:id',
        component: () => import(/* webpackChunkName: "envio-de-sms-edit" */ './pages/Edit'),
      },
      {
        name: 'envio-de-sms-view',
        path: ':id',
        component: () => import(/* webpackChunkName: "envio-de-sms-view" */ './pages/View'),
      }
    ]
  }
]
