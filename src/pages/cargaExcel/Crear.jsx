import { Link } from "react-router-dom";
import ButtonLoader from "../../components/ButtonLoader";
import InputIcon from "../../components/InputIcon";
import AlertErrors from "../../components/AlertErrors";
import Icon from "@mdi/react";
import { mdiClose, mdiContentSavePlus, mdiFile, mdiFileExcel } from "@mdi/js";
import useArchivoCrear from "../../hooks/archivo/useArchivoCrear";

const CargaExcelCrear = () => {
  const {
    errorsArchivo,
    isLoadingArchivo,
    handleSubmitArchivo,
    handleChangeInputFormArchivo,
    porcentajeCarga,
  } = useArchivoCrear();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"../inicio"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cargar Excel
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-gradient bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <Icon path={mdiFileExcel} size={1} /> CARGAR EXCEL VENTAS
              </p>
            </div>
            <div className="card-body">
              <form className="row" onSubmit={handleSubmitArchivo}>
                <div className="col-md-12 d-flex mb-3">
                  <Link
                    to={"../inicio"}
                    className="btn btn-outline-danger d-flex align-items-center"
                  >
                    <Icon path={mdiClose} size={1} /> CANCELAR
                  </Link>

                  <ButtonLoader
                    className="btn bg-primary bg-gradient text-white ms-auto"
                    label="CARGAR Y PROCESAR"
                    labelLoader="Procesando..."
                    icon={<Icon path={mdiContentSavePlus} size={1} />}
                    loader={isLoadingArchivo}
                    type="submit"
                  ></ButtonLoader>
                </div>
                <div className="col-md-12">
                  <hr />
                </div>
                <div className="col-md-12">
                  <AlertErrors
                    type="danger"
                    title="Errores de validación"
                    show={errorsArchivo.length > 0}
                    errors={errorsArchivo}
                  />
                </div>

                <div className="col-md-12 mb-2">
                  <InputIcon
                    name="archivo"
                    onChange={handleChangeInputFormArchivo}
                    label="CARGAR EXCEL"
                    icon={<Icon path={mdiFile} size={1} />}
                    size="sm"
                    type="file"
                  />
                </div>

                <div className="col-md-12 mt-3">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow={porcentajeCarga}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className={`progress-bar text-bg-${
                        errorsArchivo.length > 0 ? "danger" : "success"
                      } progress-bar-striped progress-bar-animated`}
                      style={{ width: `${porcentajeCarga}%` }}
                    >
                      {porcentajeCarga}%
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargaExcelCrear;
