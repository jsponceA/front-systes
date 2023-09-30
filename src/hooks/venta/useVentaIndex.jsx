import { useState } from "react";
import { toast } from "react-toastify";
import { todosLosVentasService } from "../../services/venta";
import { useEffect } from "react";
const useVentaIndex = () => {
  const [ventas, setVentas] = useState([]);
  const [infoPaginacionListado, setInfoPaginacionListado] = useState({});
  const [filtrosListado, setFiltrosListado] = useState({
    buscar: "",
    cantidadRegistros: 5,
    pagina: 1,
  });
  const [isLoadingVentas, setIsLoadingVentas] = useState(false);
  const [modalEliminarVenta, setModalEliminarVenta] = useState(false);
  const [idVentaProp, setIdVentaProp] = useState(null);

  const listadoVentas = async () => {
    try {
      setIsLoadingVentas(true);
      const response = await todosLosVentasService(filtrosListado);
      setVentas(response.data.ventas.data);
      setInfoPaginacionListado(response.data.ventas);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener el listado de recursos");
    } finally {
      setIsLoadingVentas(false);
    }
  };

  const handleChangeFiltrosVenta = async (e) => {
    const { type, name, value } = e.target;
    setFiltrosListado((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModalEliminar = (id) => {
    setModalEliminarVenta(true);
    setIdVentaProp(id);
  };

  const handleKeyInputFiltros = async (e) => {
    if (e.key === "Enter") {
      await listadoVentas();
    }
  };

  const handlePageClick = async (value) => {
    const pagina = value.selected + 1;
    setFiltrosListado({ ...filtrosListado, pagina });
  };

  useEffect(() => {
    listadoVentas();
  }, [filtrosListado.pagina, filtrosListado.cantidadRegistros]);

  return {
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
  };
};

export default useVentaIndex;
