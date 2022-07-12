export default [
  {
    path: "/usuarios",
    component: () => import(/* webpackChunkName: "usuarios" */ "./pages/Index"),
    children: [
      {
        name: "usuarios-list",
        path: "",
        component: () =>
          import(/* webpackChunkName: "usuarios-list" */ "./pages/List"),
      },
      {
        name: "usuarios-create",
        path: "create",
        component: () =>
          import(/* webpackChunkName: "usuarios-create" */ "./pages/Create"),
      },
      {
        name: "usuarios-edit",
        path: "edit/:id",
        component: () =>
          import(/* webpackChunkName: "usuarios-edit" */ "./pages/Edit"),
      },
      {
        name: "usuarios-view",
        path: ":id",
        component: () =>
          import(/* webpackChunkName: "usuarios-view" */ "./pages/View"),
      },
      {
        name: "usuarios-unassign",
        path: "unassign/:id",
        component: () =>
          import(/* webpackChunkName: "usuarios-unassign" */ "./pages/Unassign"),
      },
      {
        name: "usuarios-assign",
        path: "assign/:id",
        component: () =>
          import(/* webpackChunkName: "usuarios-assign" */ "./pages/Assign"),
      },
    ],
  },
];
