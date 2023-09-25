import { useState } from "react";
import { toast } from "react-toastify";
import { todosLosUsuariosService } from "../../services/usuario";
import { useEffect } from "react";
const useUsuarioIndex = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [infoPaginacionListado, setInfoPaginacionListado] = useState({});
  const [filtrosListado, setFiltrosListado] = useState({
    buscar: "",
    cantidadRegistros: 15,
    pagina: 1,
  });
  const [isLoadingUsuarios, setIsLoadingUsuarios] = useState(false);
  const [modalEliminarUsuario, setModalEliminarUsuario] = useState(false);
  const [idUsuarioProp, setIdUsuarioProp] = useState(null);

  const listadoUsuarios = async () => {
    try {
      setIsLoadingUsuarios(true);
      const response = await todosLosUsuariosService(filtrosListado);
      setUsuarios(response.data.usuarios.data);
      setInfoPaginacionListado(response.data.usuarios);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener el listado de recursos");
    } finally {
      setIsLoadingUsuarios(false);
    }
  };

  const handleChangeFiltrosUsuario = async (e) => {
    const { type, name, value } = e.target;
    setFiltrosListado((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModalEliminar = (id) => {
    setModalEliminarUsuario(true);
    setIdUsuarioProp(id);
  };

  const handleKeyInputFiltros = async (e) => {
    if (e.key === "Enter") {
      await listadoUsuarios();
    }
  };

  const handlePageClick = async (value) => {
    const pagina = value.selected + 1;
    setFiltrosListado({ ...filtrosListado, pagina });
  };

  useEffect(() => {
    listadoUsuarios();
  }, [filtrosListado.pagina, filtrosListado.cantidadRegistros]);

  return {
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
  };
};

export default useUsuarioIndex;
