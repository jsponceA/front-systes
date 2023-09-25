import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/auth/Login";
import DashBoardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import InicioIndex from "../pages/inicio/Index";
import GraficosIndex from "../pages/graficos/Index";
import UsuarioIndex from "../pages/usuario/Index";
import UsuarioCrear from "../pages/usuario/Crear";
import UsuarioEditar from "../pages/usuario/Editar";

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
    element: <ProtectedRoute element={<DashBoardLayout />} />,
    children: [
      {
        index: true,
        path: "inicio",
        element: <InicioIndex />,
      },
      {
        path: "usuarios",
        element: <UsuarioIndex />,
      },
      {
        path: "usuarios/crear",
        element: <UsuarioCrear />,
      },
      {
        path: "usuarios/editar/:id",
        element: <UsuarioEditar />,
      },
      {
        path: "graficos",
        element: <GraficosIndex />,
      },
    ],
  },
]);

export default router;
