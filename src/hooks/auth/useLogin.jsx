import { loginService } from "../../services/auth/login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuthStore from "../../store/authStore";

const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const [login, setLogin] = useState({
    usuario: "",
    clave: "",
  });
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoadingLogin(true);
      const response = await loginService(login);
      toast.success(response.data.message);
      setUser(response.data.usuario);
      setToken(response.data.token);
      navigate("/panel/inicio", { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error al autenticar");
    } finally {
      setIsLoadingLogin(false);
    }
  };

  const handleChangeInputFormLogin = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  return {
    login,
    isLoadingLogin,
    handleSubmitLogin,
    handleChangeInputFormLogin,
  };
};

export default useLogin;
