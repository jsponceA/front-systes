import { axiosPrivate } from "../../plugins/axios";

const totalesVentasPorMesAnioPasadoService = async (params) => {
  const response = await axiosPrivate.get(
    "graficos/totalesVentasPorMesAnioPasado",
    {
      params,
    }
  );
  return response;
};

const totalesVentasPorMesAnioActualService = async (params) => {
  const response = await axiosPrivate.get(
    "graficos/totalesVentasPorMesAnioActual",
    {
      params,
    }
  );
  return response;
};

const metaPlaneadaMensualService = async (params) => {
  const response = await axiosPrivate.get("graficos/metaPlaneadaMensual", {
    params,
  });
  return response;
};

const productosMasVendidosService = async (params) => {
  const response = await axiosPrivate.get("graficos/productosMasVendidos", {
    params,
  });
  return response;
};

const recomendacionProductoService = async (params) => {
  const response = await axiosPrivate.get("graficos/recomendacionProducto", {
    params,
  });
  return response;
};

export {
  totalesVentasPorMesAnioPasadoService,
  totalesVentasPorMesAnioActualService,
  metaPlaneadaMensualService,
  productosMasVendidosService,
  recomendacionProductoService,
};
