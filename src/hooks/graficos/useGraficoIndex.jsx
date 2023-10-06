import { useState } from "react";
import { toast } from "react-toastify";
import { todosLosGraficosService } from "../../services/grafico";
import { useEffect } from "react";
import { faker } from "@faker-js/faker";
const useGraficoIndex = () => {
  const [productosMasVendidos, setProductosMasVendidos] = useState({});
  const [filtrosListado, setFiltrosListado] = useState({
    buscar: "",
    cantidadRegistros: 10,
    pagina: 1,
  });
  const [isLoadingGraficos, setIsLoadingGraficos] = useState(false);
  const [modalEliminarGrafico, setModalEliminarGrafico] = useState(false);
  const [idGraficoProp, setIdGraficoProp] = useState(null);

  const [barData, setBarData] = useState({
    labels: [],
    datasets: [],
  });

  const listadoGraficos = async () => {
    try {
      setIsLoadingGraficos(true);
      const response = await todosLosGraficosService(filtrosListado);
      // setProductosMasVendidos(response.data.barDataResult);
      setBarData({
        labels: response.data.barDataResult.labels,
        datasets: response.data.barDataResult.data.map((item) => {
          return {
            label: item?.producto || "-",
            data: response.data.barDataResult.data.map((item2) =>
              item2?.producto ? faker.number.int({ min: 0, max: 1000 }) : 0
            ),
          };
        }),
      });
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener el listado de recursos");
    } finally {
      setIsLoadingGraficos(false);
    }
  };

  const handleChangeFiltrosGrafico = async (e) => {
    const { type, name, value } = e.target;
    setFiltrosListado((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModalEliminar = (id) => {
    setModalEliminarGrafico(true);
    setIdGraficoProp(id);
  };

  const handleKeyInputFiltros = async (e) => {
    if (e.key === "Enter") {
      await listadoGraficos();
    }
  };

  const handlePageClick = async (value) => {
    const pagina = value.selected + 1;
    setFiltrosListado({ ...filtrosListado, pagina });
  };

  useEffect(() => {
    listadoGraficos();
  }, [filtrosListado.pagina, filtrosListado.cantidadRegistros]);

  return {
    listadoGraficos,
    productosMasVendidos,
    handleChangeFiltrosGrafico,
    isLoadingGraficos,
    modalEliminarGrafico,
    setModalEliminarGrafico,
    idGraficoProp,
    handleKeyInputFiltros,
    handlePageClick,
    openModalEliminar,
    barData,
  };
};

export default useGraficoIndex;
