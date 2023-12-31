import {
  modificarUsuarioService,
  usuarioPorIdService,
} from "../../services/usuario";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useUsuarioEditar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [usuario, setUsuario] = useState({
    _method: "PUT",
    usuario: "",
    clave: "",
    nombres: "",
    apellidos: "",
    correo: "",
    foto: "",
    foto_url: "",
    estado: true,
    rol_id: "",
  });
  const [errorsUsuario, setErrorsUsuario] = useState([]);
  const [isLoadingUsuario, setIsLoadingUsuario] = useState(false);
  const [isLoadingInitialdata, setIsLoadingInitialdata] = useState(false);

  const fetchInitialData = async () => {
    try {
      setIsLoadingInitialdata(true);
      const responseUsuario = await usuarioPorIdService(id);
      Object.entries(responseUsuario.data?.usuario).map(([key, value]) => {
        if (key != "foto") {
          setUsuario((prev) => ({ ...prev, [key]: value }));
        }
      });
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setIsLoadingInitialdata(false);
    }
  };

  const handleSubmitUsuario = async (e) => {
    e.preventDefault();
    try {
      setIsLoadingUsuario(true);
      setErrorsUsuario([]);
      const formData = new FormData();
      Object.entries(usuario).map(([key, value]) =>
        formData.append(key, value || "")
      );
      const response = await modificarUsuarioService(id, formData);
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

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    usuario,
    errorsUsuario,
    isLoadingUsuario,
    isLoadingInitialdata,
    handleSubmitUsuario,
    handleChangeInputFormUsuario,
  };
};

export default useUsuarioEditar;
