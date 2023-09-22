import Icon from "@mdi/react";
import { mdiMenu, mdiAccountEdit, mdiCogs, mdiLogout } from "@mdi/js";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleClickLogout = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <header className=" text-white dashboard-header py-2 px-1 d-flex">
      <a href="#" className="text-decoration-none link-light">
        <Icon path={mdiMenu} size={1.2} />
      </a>
      <p className="my-0 mx-auto fw-medium align-self-center">
        SISTEMA DE REDES NEURONALES PARA EL PROCESO DE VENTAS
      </p>
      <div className="ms-auto">
        <div className="dropdown">
          <a
            href="#"
            className="dropdown-toggle link-light"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="/foto_user.jpg"
              alt=""
              className="rounded-circle"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                <Icon path={mdiAccountEdit} size={1} /> Mi Perfil
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <Icon path={mdiCogs} size={1} /> Configuraciones
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a onClick={handleClickLogout} className="dropdown-item" href="#">
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
