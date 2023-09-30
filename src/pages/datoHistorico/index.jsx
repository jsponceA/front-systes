import { Link } from "react-router-dom";
import dayjs from "dayjs";
import ReactPaginateBootstrap5 from "../../components/ReactPaginateBootstrap5";
import useArchivoIndex from "../../hooks/archivo/useArchivoIndex";
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
  mdiViewList,
  mdiHistory,
  mdiDownload,
} from "@mdi/js";
import InputIcon from "../../components/InputIcon";
import SelectIcon from "../../components/SelectIcon";

const DatoHistoricoIndex = () => {
  const {
    listadoArchivos,
    archivos,
    handleChangeFiltrosArchivo,
    infoPaginacionListado,
    isLoadingArchivos,
    modalEliminarArchivo,
    setModalEliminarArchivo,
    idArchivoProp,
    handleKeyInputFiltros,
    handlePageClick,
    openModalEliminar,
  } = useArchivoIndex();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/panel/inicio"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Datos Historicos
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-gradient bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <Icon path={mdiHistory} size={1} /> DATOS HISTORICOS
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 d-flex">
                  {/*  <div className="me-auto">
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
                  </div> */}
                  {/*  <Link
                    to={"../archivos/crear"}
                    className="btn bg-primary bg-gradient text-white d-flex align-items-center ms-auto"
                  >
                    <Icon path={mdiPlus} size={1} /> AGREGAR USUARIO
                  </Link> */}
                </div>
                {/* <div className="col-md-12">
                  <InputIcon
                    name="buscar"
                    onChange={handleChangeFiltrosArchivo}
                    onKeyDown={handleKeyInputFiltros}
                    icon={<Icon path={mdiTextSearch} size={1} />}
                    size="sm"
                    type="search"
                    placeholder="Buscar registro..."
                    maxLength="255"
                  />
                </div> */}

                <div className="col-md-2 mb-1 ">
                  <SelectIcon
                    name="cantidadRegistros"
                    onChange={handleChangeFiltrosArchivo}
                    icon={<Icon path={mdiViewList} size={1} />}
                    size="sm"
                    options={
                      <>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="500">500</option>
                      </>
                    }
                  />
                </div>

                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-sm table-hover table-bordered custom-table ">
                      <thead>
                        <tr className="text-nowrap">
                          {/* <td className="text-center">ACCIONES</td> */}
                          <td>ARCHIVO</td>
                          <td>REGISTRADO POR</td>
                          <td>FECHA DE SUBIDA</td>
                        </tr>
                      </thead>
                      <tbody>
                        {archivos.map((archivo) => (
                          <tr key={archivo.id}>
                            {/* <td>
                              <div className="dropdown open ">
                                <button
                                  className="btn bg-secondary bg-gradient text-white btn-sm dropdown-toggle "
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
                                    to={`../archivos/editar/${archivo.id}`}
                                    className="dropdown-item"
                                  >
                                    <Icon path={mdiPencil} size={0.8} /> Editar
                                  </Link> 
                                   <button
                                    onClick={() =>
                                      openModalEliminar(archivo.id)
                                    }
                                    type="button"
                                    className="dropdown-item"
                                  >
                                    <Icon path={mdiDelete} size={0.8} />{" "}
                                    Eliminar
                                  </button> 
                                </div>
                              </div>
                            </td> */}
                            <td>
                              <a
                                className="link-success text-decoration-none"
                                href={archivo.excel_url}
                                download
                              >
                                <Icon path={mdiFileExcel} size={1} /> Descargar
                                EXCEL
                              </a>
                            </td>
                            <td>{archivo.usuario.usuario}</td>

                            <td>
                              {archivo.created_at &&
                                dayjs(archivo.created_at).format("DD/MM/YYYY")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="text-nowrap">
                          {/* <td className="text-center">ACCIONES</td> */}
                          <td>ARCHIVO</td>
                          <td>REGISTRADO POR</td>
                          <td>FECHA DE SUBIDA</td>
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
                        pageCount={infoPaginacionListado.last_page || 0}
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

export default DatoHistoricoIndex;
