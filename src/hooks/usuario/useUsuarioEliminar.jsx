import { Modal } from "bootstrap";
import { eliminarUsuarioService } from "../../services/usuario";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useUsuarioEliminar = ({
  id,
  listadoUsuarios,
  openModal,
  setOpenModal,
}) => {
  const [isLoadingUsuario, setIsLoadingUsuario] = useState(false);

  const handleClickEliminarUsuario = async (e) => {
    e.preventDefault();
    try {
      setIsLoadingUsuario(true);
      await eliminarUsuarioService(id);
      toast.success("Usuario eliminado con exito.");
      await listadoUsuarios();
    } catch (error) {
      toast.error(error.response?.data?.message || "Error del servidor");
    } finally {
      setIsLoadingUsuario(false);
      setOpenModal(false);
    }
  };

  const handleModalHidden = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const modal = Modal.getOrCreateInstance("#modalEliminarUsuario");
    openModal ? modal.show() : modal.hide();
  }, [openModal]);

  useEffect(() => {
    const modal = document.getElementById("modalEliminarUsuario");
    modal.addEventListener("hidden.bs.modal", handleModalHidden);
    return () => {
      modal.removeEventListener("hidden.bs.modal", handleModalHidden);
    };
  }, []);

  return {
    isLoadingUsuario,
    handleClickEliminarUsuario,
  };
};

export default useUsuarioEliminar;
