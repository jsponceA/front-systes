import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import RedirectIsLogged from "../components/RedirectIsLogged";
import Login from "../pages/auth/Login";
import DashBoardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import InicioIndex from "../pages/inicio/Index";
import GraficosIndex from "../pages/graficos/Index";
import UsuarioIndex from "../pages/usuario/Index";
import UsuarioCrear from "../pages/usuario/Crear";
import UsuarioEditar from "../pages/usuario/Editar";
import Perfilditar from "../pages/perfil/Editar";
import CargaExcelCrear from "../pages/cargaExcel/Crear";
import VentaIndex from "../pages/venta/Index";
import DatoHistoricoIndex from "../pages/datoHistorico";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectIsLogged element={<AuthLayout />} />,

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
        path: "mi-perfil",
        element: <Perfilditar />,
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
        path: "carga-excel",
        element: <CargaExcelCrear />,
      },
      {
        path: "graficos",
        element: <GraficosIndex />,
      },
      {
        path: "ventas",
        element: <VentaIndex />,
      },
      {
        path: "datos-historicos",
        element: <DatoHistoricoIndex />,
      },
    ],
  },
]);

export default router;
