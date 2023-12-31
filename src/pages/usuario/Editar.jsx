import { Link } from "react-router-dom";
import ButtonLoader from "../../components/ButtonLoader";
import InputIcon from "../../components/InputIcon";
import SelectIcon from "../../components/SelectIcon";
import AlertErrors from "../../components/AlertErrors";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAccountGroup,
  mdiCheck,
  mdiClose,
  mdiContentSaveEdit,
  mdiEmail,
  mdiImage,
  mdiLock,
  mdiShieldAccount,
  mdiText,
} from "@mdi/js";
import useUsuarioEditar from "../../hooks/usuario/useUsuarioEditar";
import SpinnerLoader from "../../components/SpinnerLoader";

const UsuarioEditar = () => {
  const {
    usuario,
    errorsUsuario,
    isLoadingUsuario,
    isLoadingInitialdata,
    handleSubmitUsuario,
    handleChangeInputFormUsuario,
  } = useUsuarioEditar();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"../inicio"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"../usuarios"}>Usuarios</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Editar
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-gradient bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <Icon path={mdiAccountGroup} size={1} /> MODIFICAR USUARIO
              </p>
            </div>
            <div className="card-body">
              {isLoadingInitialdata && (
                <div className="row d-flex justify-content-center">
                  <SpinnerLoader color="primary" />
                </div>
              )}
              <form
                className={`row ${isLoadingInitialdata ? "d-none" : ""}`}
                onSubmit={handleSubmitUsuario}
              >
                <div className="col-md-12 d-flex mb-3">
                  <Link
                    to={"../usuarios"}
                    className="btn btn-outline-danger d-flex align-items-center"
                  >
                    <Icon path={mdiClose} size={1} /> CANCELAR
                  </Link>
                  <ButtonLoader
                    className="btn bg-primary bg-gradient text-white ms-auto"
                    label="MODIFICAR"
                    labelLoader="Procesando..."
                    icon={<Icon path={mdiContentSaveEdit} size={1} />}
                    loader={isLoadingUsuario}
                    type="submit"
                  ></ButtonLoader>
                </div>
                <div className="col-md-12">
                  <AlertErrors
                    type="danger"
                    title="Errores de validación"
                    show={errorsUsuario.length > 0}
                    errors={errorsUsuario}
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <SelectIcon
                    label="Rol (*)"
                    name="rol_id"
                    onChange={handleChangeInputFormUsuario}
                    icon={<Icon path={mdiShieldAccount} size={1} />}
                    size="sm"
                    required
                    value={usuario.rol_id}
                    options={
                      <>
                        <option value="">[--Seleccione]</option>
                        <option value="1">Administrador</option>
                        <option value="2">Generico</option>
                      </>
                    }
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <InputIcon
                    name="usuario"
                    onChange={handleChangeInputFormUsuario}
                    value={usuario.usuario}
                    label="Usuario (*)"
                    icon={<Icon path={mdiAccount} size={1} />}
                    size="sm"
                    placeholder="Usuario..."
                    required
                    maxLength="100"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <InputIcon
                    name="clave"
                    onChange={handleChangeInputFormUsuario}
                    value={usuario.clave}
                    label="Contraseña"
                    icon={<Icon path={mdiLock} size={1} />}
                    size="sm"
                    placeholder="********"
                    type="password"
                    maxLength="255"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <InputIcon
                    name="nombres"
                    onChange={handleChangeInputFormUsuario}
                    value={usuario.nombres}
                    label="Nombres (*)"
                    icon={<Icon path={mdiText} size={1} />}
                    size="sm"
                    placeholder="Nombres..."
                    required
                    maxLength="100"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <InputIcon
                    name="apellidos"
                    onChange={handleChangeInputFormUsuario}
                    value={usuario.apellidos}
                    label="Apellidos (*)"
                    icon={<Icon path={mdiText} size={1} />}
                    size="sm"
                    placeholder="Apellidos..."
                    required
                    maxLength="100"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <InputIcon
                    name="correo"
                    onChange={handleChangeInputFormUsuario}
                    value={usuario.correo}
                    label="Correo"
                    icon={<Icon path={mdiEmail} size={1} />}
                    size="sm"
                    type="email"
                    placeholder="ejemplo@tucorreo.com"
                    maxLength="255"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <SelectIcon
                    name="estado"
                    onChange={handleChangeInputFormUsuario}
                    value={usuario.estado}
                    label="Estado (*)"
                    icon={<Icon path={mdiCheck} size={1} />}
                    size="sm"
                    options={
                      <>
                        <option value="">[--Seleccione--]</option>
                        <option value={true}>Habilitado</option>
                        <option value={false}>Inabilitado</option>
                      </>
                    }
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <InputIcon
                    name="foto"
                    onChange={handleChangeInputFormUsuario}
                    label="Foto"
                    icon={<Icon path={mdiImage} size={1} />}
                    size="sm"
                    type="file"
                  />
                  {usuario.foto_url && (
                    <img
                      src={usuario.foto_url}
                      alt=""
                      className="img-thumbnail mt-2"
                      style={{ width: "120px", height: "80px" }}
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioEditar;
