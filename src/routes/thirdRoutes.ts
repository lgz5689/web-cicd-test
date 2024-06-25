const thirdRoutes = [
  {
    path: "login",
    async lazy() {
      const { Login } = await import("@/pages/third/login");
      return { Component: Login };
    },
  },
];

export default thirdRoutes;
