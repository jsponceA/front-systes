import Icon from "@mdi/react";
import { mdiMenu, mdiAccountEdit, mdiCogs, mdiLogout } from "@mdi/js";
import useAuthStore from "../../store/authStore";
import useLogout from "../../hooks/auth/useLogout";
import useSidebar from "../../hooks/useSidebar";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const user = useAuthStore((state) => state.user);

  const { isLoadingLogout, handleClickLogout } = useLogout();
  const { toggleSideBar } = useSidebar();

  return (
    <header className=" text-white dashboard-header py-2 px-1 d-flex">
      <a
        onClick={toggleSideBar}
        href="#"
        className="text-decoration-none link-light"
      >
        <Icon path={mdiMenu} size={1.2} />
      </a>
      <p className="my-0 mx-auto fw-medium align-self-center fs-6 d-none d-md-block">
        SISTEMA DE REDES NEURONALES PARA EL PROCESO DE VENTAS
      </p>
      <div className="ms-auto">
        <div className="dropdown me-2">
          <a
            href="#"
            className="dropdown-toggle link-light"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.foto_url}
              alt=""
              className="rounded-circle"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <Link to={"/panel/mi-perfil"} className="dropdown-item" href="#">
                <Icon path={mdiAccountEdit} size={1} /> Mi Perfil
              </Link>
            </li>
            {/* <li>
              <a className="dropdown-item" href="#">
                <Icon path={mdiCogs} size={1} /> Configuraciones
              </a>
            </li> */}
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                onClick={handleClickLogout}
                className={`dropdown-item ${isLoadingLogout ? "disabled" : ""}`}
                href="#"
              >
                <Icon path={mdiLogout} size={1} /> Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
