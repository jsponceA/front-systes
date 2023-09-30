import { crearUsuarioService } from "../../services/usuario";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const useUsuarioCrear = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    usuario: "",
    clave: "",
    nombres: "",
    apellidos: "",
    correo: "",
    foto: "",
    estado: true,
  });
  const [errorsUsuario, setErrorsUsuario] = useState([]);
  const [isLoadingUsuario, setIsLoadingUsuario] = useState(false);

  const handleSubmitUsuario = async (e) => {
    e.preventDefault();
    try {
      setIsLoadingUsuario(true);
      setErrorsUsuario([]);
      const formData = new FormData();
      Object.entries(usuario).map(([key, value]) =>
        formData.append(key, value || "")
      );
      const response = await crearUsuarioService(formData);
      toast.success(response.data.message);
      navigate("/panel/usuarios");
    } catch (error) {
      if (error.response?.status === 422) {
        setErrorsUsuario(
          Object.values(error.response?.data?.errors || []).flat()
        );
      } else {
        toast.error(error.response?.data?.message || "Error del servidor");
      }
    } finally {
      setIsLoadingUsuario(false);
    }
  };

  const handleChangeInputFormUsuario = (e) => {
    const { type, name, value, files } = e.target;
    if (type === "file") {
      setUsuario((prev) => ({ ...prev, [name]: files[0] || "" }));
    } else {
      setUsuario((prev) => ({ ...prev, [name]: value }));
    }
  };

  return {
    usuario,
    errorsUsuario,
    isLoadingUsuario,
    handleSubmitUsuario,
    handleChangeInputFormUsuario,
  };
};

export default useUsuarioCrear;
