import { crearArchivoService } from "../../services/archivo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const useArchivoCrear = () => {
  const navigate = useNavigate();
  const [archivo, setArchivo] = useState({
    archivo: "",
  });
  const [errorsArchivo, setErrorsArchivo] = useState([]);
  const [isLoadingArchivo, setIsLoadingArchivo] = useState(false);
  const [porcentajeCarga, setPorcentajeCarga] = useState(0);

  const handleSubmitArchivo = async (e) => {
    e.preventDefault();
    try {
      setIsLoadingArchivo(true);
      setErrorsArchivo([]);
      setPorcentajeCarga(0);
      const formData = new FormData();
      Object.entries(archivo).map(([key, value]) =>
        formData.append(key, value || "")
      );
      const response = await crearArchivoService(formData);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/panel/graficos");
      }, 2000);
    } catch (error) {
      if (error.response?.status === 422) {
        setErrorsArchivo(
          Object.values(error.response?.data?.errors || []).flat()
        );
      } else {
        toast.error(error.response?.data?.message || "Error del servidor");
      }
    } finally {
      setIsLoadingArchivo(false);
      setPorcentajeCarga(100);
    }
  };

  const handleChangeInputFormArchivo = (e) => {
    const { type, name, value, files } = e.target;
    if (type === "file") {
      setArchivo((prev) => ({ ...prev, [name]: files[0] || "" }));
    } else {
      setArchivo((prev) => ({ ...prev, [name]: value }));
    }
  };

  return {
    archivo,
    errorsArchivo,
    isLoadingArchivo,
    handleSubmitArchivo,
    handleChangeInputFormArchivo,
    porcentajeCarga,
  };
};

export default useArchivoCrear;
