import Icon from "@mdi/react";
import { mdiCardAccountDetailsOutline } from "@mdi/js";
import dayjs from "dayjs";
import useAuthStore from "../../store/authStore";

const InicioIndex = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <p className="fs-4 fw-bold text-uppercase">
            BIENVENIDO AL SISTEMA {user.nombres} {user.apellidos}
          </p>
          <Icon path={mdiCardAccountDetailsOutline} size={8} />
          <p>
            FECHA Y HORA DE INGRESO: {dayjs().format("DD/MM/YYYY hh:mm:ss A")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InicioIndex;
