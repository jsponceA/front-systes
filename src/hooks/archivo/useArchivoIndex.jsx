import { useState } from "react";
import { toast } from "react-toastify";
import { todosLosArchivosService } from "../../services/archivo";
import { useEffect } from "react";
const useArchivoIndex = () => {
  const [archivos, setArchivos] = useState([]);
  const [infoPaginacionListado, setInfoPaginacionListado] = useState({});
  const [filtrosListado, setFiltrosListado] = useState({
    buscar: "",
    cantidadRegistros: 10,
    pagina: 1,
  });
  const [isLoadingArchivos, setIsLoadingArchivos] = useState(false);
  const [modalEliminarArchivo, setModalEliminarArchivo] = useState(false);
  const [idArchivoProp, setIdArchivoProp] = useState(null);

  const listadoArchivos = async () => {
    try {
      setIsLoadingArchivos(true);
      const response = await todosLosArchivosService(filtrosListado);
      setArchivos(response.data.archivos.data);
      setInfoPaginacionListado(response.data.archivos);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener el listado de recursos");
    } finally {
      setIsLoadingArchivos(false);
    }
  };

  const handleChangeFiltrosArchivo = async (e) => {
    const { type, name, value } = e.target;
    setFiltrosListado((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModalEliminar = (id) => {
    setModalEliminarArchivo(true);
    setIdArchivoProp(id);
  };

  const handleKeyInputFiltros = async (e) => {
    if (e.key === "Enter") {
      await listadoArchivos();
    }
  };

  const handlePageClick = async (value) => {
    const pagina = value.selected + 1;
    setFiltrosListado({ ...filtrosListado, pagina });
  };

  useEffect(() => {
    listadoArchivos();
  }, [filtrosListado.pagina, filtrosListado.cantidadRegistros]);

  return {
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
  };
};

export default useArchivoIndex;
