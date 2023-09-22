import Icon from "@mdi/react";
import {
  mdiCircle,
  mdiHome,
  mdiAccountGroup,
  mdiFileExcel,
  mdiHistory,
  mdiStore,
  mdiChartBar,
} from "@mdi/js";
import { NavLink } from "react-router-dom";

const APP_NAME = import.meta.env.VITE_APP_NAME;

const DashboardSidebar = () => {
  return (
    <div className=" position-fixed vh-100 dashboard-sidebar">
      <div
        className="fw-bold  d-flex flex-column w-100"
        style={{ backgroundColor: "var(--bs-pink)" }}
      >
        <p className="my-1 text-white text-center ">🌍{APP_NAME}🌍</p>
        <div className="align-items-center d-flex flex-column">
          <img
            src="/foto_user.jpg"
            alt=""
            className="rounded-circle"
            style={{ width: "100px", height: "100px" }}
          />
          <p className="my-0 d-flex align-items-center fw-medium">
            <Icon path={mdiCircle} size={0.5} color="green" />
            <span>En linea</span>
          </p>
          <p className="my-0">Luis Tasayco</p>
        </div>
      </div>
      <ul className="nav nav-pills flex-column mb-auto nav-sidebar mt-3 ">
        <li className="nav-item">
          <NavLink
            to={"/panel/inicio"}
            className="nav-link d-flex align-items-center"
          >
            <Icon path={mdiHome} size={0.8} className="me-1" color="white" />{" "}
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <Icon
              path={mdiAccountGroup}
              size={0.8}
              className="me-1"
              color="silver"
            />{" "}
            Usuarios
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <Icon path={mdiStore} size={0.8} className="me-1" color="skyblue" />{" "}
            Ventas Registradas
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <Icon
              path={mdiFileExcel}
              size={0.8}
              color="green"
              className="me-1"
            />{" "}
            Cargar Excel Ventas
          </a>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/panel/graficos"}
            href="#"
            className="nav-link d-flex align-items-center"
          >
            <Icon
              path={mdiChartBar}
              size={0.8}
              className="me-1"
              color="orange"
            />{" "}
            Graficos
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center">
            <Icon path={mdiHistory} size={0.8} className="me-1" color="black" />{" "}
            Datos Historicos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
