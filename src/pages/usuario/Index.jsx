import { Link } from "react-router-dom";
import dayjs from "dayjs";
import ReactPaginateBootstrap5 from "../../components/ReactPaginateBootstrap5";
import useUsuarioIndex from "../../hooks/usuario/useUsuarioIndex";
import Icon from "@mdi/react";
import {
  mdiAccountGroup,
  mdiTextSearch,
  mdiFileExcel,
  mdiFilePdfBox,
  mdiPlus,
  mdiCogs,
  mdiPencil,
  mdiDelete,
} from "@mdi/js";

const UsuarioIndex = () => {
  const {
    listadoUsuarios,
    usuarios,
    handleChangeFiltrosUsuario,
    infoPaginacionListado,
    isLoadingUsuarios,
    modalEliminarUsuario,
    setModalEliminarUsuario,
    idUsuarioProp,
    handleKeyInputFiltros,
    handlePageClick,
    openModalEliminar,
  } = useUsuarioIndex();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Usuarios
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-gradient bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <Icon path={mdiAccountGroup} size={1} /> USUARIOS
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 d-flex mb-3">
                  <div className="me-auto">
                    <button
                      title="GENERAR REPORTE EN PDF"
                      className="btn bg-danger bg-gradient text-white mx-1"
                    >
                      <Icon path={mdiFilePdfBox} size={1} />
                    </button>
                    <button
                      title="GENERAR REPORTE EN EXCEL"
                      className="btn bg-success bg-gradient text-white mx-1"
                    >
                      <Icon path={mdiFileExcel} size={1} />
                    </button>
                  </div>
                  <Link
                    to={"/usuarios/crear"}
                    className="btn bg-primary bg-gradient text-white d-flex align-items-center"
                  >
                    <Icon path={mdiPlus} size={1} /> AGREGAR USUARIO
                  </Link>
                </div>
                <div className="col-md-12 mb-2">
                  <div className="input-group">
                    <span
                      onClick={() => listadoUsuarios()}
                      className="input-group-text border-secondary-subtle border-2"
                      style={{ cursor: "pointer" }}
                    >
                      <Icon path={mdiTextSearch} size={1} />
                    </span>
                    <input
                      onChange={handleChangeFiltrosUsuario}
                      onKeyDown={handleKeyInputFiltros}
                      type="text"
                      name="buscar"
                      className="form-control border-secondary-subtle border-2"
                      placeholder="Buscar registro..."
                    />
                  </div>
                </div>
                <div className="col-md-1 mb-1">
                  <select
                    onChange={handleChangeFiltrosUsuario}
                    name="cantidadRegistros"
                    className="form-select form-select-sm border-secondary"
                    title="Cantidad de registros a mostrar"
                  >
                    <option value="15">15</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                  </select>
                </div>

                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-sm table-hover table-bordered custom-table ">
                      <thead>
                        <tr className="text-nowrap">
                          <td className="text-center">ACCIONES</td>
                          <td>USUARIO</td>
                          <td>CORREO</td>
                          <td>FECHA CREACIÓN</td>
                          <td>FECHA MODIFICACIÓN</td>
                        </tr>
                      </thead>
                      <tbody>
                        {usuarios.map((usuario) => (
                          <tr key={usuario.id}>
                            <td className="text-center">
                              <div className="dropdown open">
                                <button
                                  className="btn bg-secondary bg-gradient text-white btn-sm dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-config='{"popperConfig":{"strategy":"fixed"}}'
                                >
                                  <Icon path={mdiCogs} size={0.8} /> Seleccione
                                </button>
                                <div className="dropdown-menu">
                                  <Link
                                    to={`/usuarios/edit/${usuario.id}`}
                                    className="dropdown-item"
                                  >
                                    <Icon path={mdiPencil} size={0.8} /> Editar
                                  </Link>
                                  <button
                                    onClick={() =>
                                      openModalEliminar(usuario.id)
                                    }
                                    type="button"
                                    className="dropdown-item"
                                  >
                                    <Icon path={mdiDelete} size={0.8} />{" "}
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>{usuario.usuario}</td>
                            <td>{usuario.correo}</td>
                            <td>
                              {usuario.created_at &&
                                dayjs(usuario.created_at).format("DD/MM/YYYY")}
                            </td>
                            <td>
                              {usuario.updated_at &&
                                dayjs(usuario.updated_at).format("DD/MM/YYYY")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="text-nowrap">
                          <td className="text-center">ACCIONES</td>
                          <td>USUARIO</td>
                          <td>CORREO</td>
                          <td>FECHA CREACIÓN</td>
                          <td>FECHA MODIFICACIÓN</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="d-flex flex-md-row flex-column">
                    <p className="my-0">
                      {`Mostrando del registro
                        ${infoPaginacionListado.from || 0} al
                        ${infoPaginacionListado.last_page || 0} de un total de
                        ${infoPaginacionListado.total || 0} filas`}
                    </p>
                    <div className="ms-auto">
                      <ReactPaginateBootstrap5
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={infoPaginacionListado.total || 0}
                        renderOnZeroPageCount={null}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioIndex;
