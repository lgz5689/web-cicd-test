import { createHashRouter } from "react-router-dom";

import ContentLayout from "../layout/ContentLayout/index.tsx";
import MainLayout from "../layout/MainLayout.tsx";
import thirdRoutes from "./thirdRoutes.ts";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ContentLayout />,
        children: [],
      },
      {
        path: "login",
        async lazy() {
          const { Login } = await import("@/pages/login");
          return { Component: Login };
        },
      },
    ],
  },
  {
    path: "third",
    children: thirdRoutes,
  },
]);

export default router;
