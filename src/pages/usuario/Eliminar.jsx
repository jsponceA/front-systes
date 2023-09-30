import Icon from "@mdi/react";
import useUsuarioEliminar from "../../hooks/usuario/useUsuarioEliminar";
import ButtonLoader from "../../components/ButtonLoader";
import { mdiCheck, mdiClose } from "@mdi/js";

const UsuarioEliminar = ({ id, listadoUsuarios, openModal, setOpenModal }) => {
  const { isLoadingUsuario, handleClickEliminarUsuario } = useUsuarioEliminar({
    id,
    listadoUsuarios,
    openModal,
    setOpenModal,
  });
  return (
    <div className="modal fade" id="modalEliminarUsuario" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modalEliminarUsuarioLabel">
              ELIMINAR USUARIO
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              ¿Esta seguro que desea{" "}
              <span className="text-danger">eliminar</span> este usuario?
            </p>
          </div>
          <div className="modal-footer">
            <ButtonLoader
              className="btn btn-outline-danger"
              label="Cancelar"
              labelLoader="Procesando..."
              icon={<Icon path={mdiClose} size={1} />}
              loader={isLoadingUsuario}
              type="button"
              data-bs-dismiss="modal"
            ></ButtonLoader>
            <ButtonLoader
              onClick={handleClickEliminarUsuario}
              className="btn bg-primary bg-gradient text-white ms-auto"
              label="Si, Acepto"
              labelLoader="Procesando..."
              icon={<Icon path={mdiCheck} size={1} />}
              loader={isLoadingUsuario}
              type="button"
            ></ButtonLoader>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioEliminar;
