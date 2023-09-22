import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import DashBoardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import InicioIndex from "../pages/inicio/Index";
import GraficosIndex from "../pages/graficos/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,

    children: [
      {
        index: true,
        element: <Navigate to={"/login"} replace />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/panel",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        path: "inicio",
        element: <InicioIndex />,
      },
      {
        path: "graficos",
        element: <GraficosIndex />,
      },
    ],
  },
]);

export default router;
