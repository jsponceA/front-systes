import Icon from "@mdi/react";
import { mdiCardAccountDetailsOutline } from "@mdi/js";

const InicioIndex = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <p className="fs-4 fw-bold">BIENVENIDO AL SISTEMA LUIS TASAYCO</p>
          <Icon path={mdiCardAccountDetailsOutline} size={8} />
          <p>FECHA Y HORA DE INGRESO: 19/09/2023 09:19:20 PM</p>
        </div>
      </div>
    </div>
  );
};

export default InicioIndex;
