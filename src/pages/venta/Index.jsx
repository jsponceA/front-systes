import { Link } from "react-router-dom";
import dayjs from "dayjs";
import ReactPaginateBootstrap5 from "../../components/ReactPaginateBootstrap5";
import useVentaIndex from "../../hooks/venta/useVentaIndex";
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
  mdiStore,
} from "@mdi/js";
import InputIcon from "../../components/InputIcon";
import SelectIcon from "../../components/SelectIcon";

const VentaIndex = () => {
  const {
    listadoVentas,
    ventas,
    handleChangeFiltrosVenta,
    infoPaginacionListado,
    isLoadingVentas,
    modalEliminarVenta,
    setModalEliminarVenta,
    idVentaProp,
    handleKeyInputFiltros,
    handlePageClick,
    openModalEliminar,
  } = useVentaIndex();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/panel/inicio"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Ventas
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-gradient bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <Icon path={mdiStore} size={1} /> VENTAS
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
                  {/* <Link
                    to={"../ventas/crear"}
                    className="btn bg-primary bg-gradient text-white d-flex align-items-center ms-auto"
                  >
                    <Icon path={mdiPlus} size={1} /> AGREGAR USUARIO
                  </Link> */}
                </div>
                <div className="col-md-12">
                  <InputIcon
                    name="buscar"
                    onChange={handleChangeFiltrosVenta}
                    onKeyDown={handleKeyInputFiltros}
                    icon={<Icon path={mdiTextSearch} size={1} />}
                    size="sm"
                    type="search"
                    placeholder="Buscar registro..."
                    maxLength="255"
                  />
                </div>

                <div className="col-md-2 mb-1 ">
                  <SelectIcon
                    name="cantidadRegistros"
                    onChange={handleChangeFiltrosVenta}
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
                          <td>FECHA DE VENTA</td>
                          <td>DOCUMENTO</td>
                          <td>VENDEDOR</td>
                          <td>NRO. DOCUMENTO</td>
                          <td>CLIENTE</td>
                          <td>CANTIDAD</td>
                          <td>U. MEDIDA</td>
                          <td>CODIGO PRODUCTO</td>
                          <td>PRODUCTO</td>
                          <td>MONEDA</td>
                          <td>PRECIO PUBLICO</td>
                          <td>PRECIO</td>
                          <td>TOTALES</td>
                          <td>DESCUENTO</td>
                          <td>POR ENTREGAR</td>
                          <td>UM. POR ENTREGAR</td>
                          <td>ESTADO</td>
                          <td>CONDICIÓN DE PAGO</td>
                          <td>LINEA PADRE</td>
                          <td>LINEA HIJO</td>
                        </tr>
                      </thead>
                      <tbody>
                        {ventas.map((venta) => (
                          <tr key={venta.id}>
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
                                    to={`../ventas/editar/${venta.id}`}
                                    className="dropdown-item"
                                  >
                                    <Icon path={mdiPencil} size={0.8} /> Editar
                                  </Link>
                                  <button
                                    onClick={() =>
                                      openModalEliminar(venta.id)
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
                              {venta.fecha &&
                                dayjs(venta.fecha).format("DD/MM/YYYY")}
                            </td>
                            <td>{venta.documento}</td>
                            <td>{venta.vendedor}</td>
                            <td>{venta.nro_doc}</td>
                            <td>{venta.cliente}</td>
                            <td>{venta.cantidad}</td>
                            <td>{venta.u_medida}</td>
                            <td>{venta.codigo_producto}</td>
                            <td>{venta.producto}</td>
                            <td>{venta.moneda}</td>
                            <td>{venta.precio_publico}</td>
                            <td>{venta.precio}</td>
                            <td>{venta.totales}</td>
                            <td>{venta.descuento}</td>
                            <td>{venta.por_entregar}</td>
                            <td>{venta.um_por_entregar}</td>
                            <td>{venta.estado}</td>
                            <td>{venta.condicion_pago}</td>
                            <td>{venta.linea_padre}</td>
                            <td>{venta.linea_hijo}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="text-nowrap">
                          {/*  <td className="text-center">ACCIONES</td> */}
                          <td>FECHA DE VENTA</td>
                          <td>DOCUMENTO</td>
                          <td>VENDEDOR</td>
                          <td>NRO. DOCUMENTO</td>
                          <td>CLIENTE</td>
                          <td>CANTIDAD</td>
                          <td>U. MEDIDA</td>
                          <td>CODIGO PRODUCTO</td>
                          <td>PRODUCTO</td>
                          <td>MONEDA</td>
                          <td>PRECIO PUBLICO</td>
                          <td>PRECIO</td>
                          <td>TOTALES</td>
                          <td>DESCUENTO</td>
                          <td>POR ENTREGAR</td>
                          <td>UM. POR ENTREGAR</td>
                          <td>ESTADO</td>
                          <td>CONDICIÓN DE PAGO</td>
                          <td>LINEA PADRE</td>
                          <td>LINEA HIJO</td>
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

export default VentaIndex;
