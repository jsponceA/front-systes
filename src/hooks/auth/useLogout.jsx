import { logoutService } from "../../services/auth/logout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuthStore from "../../store/authStore";

const useLogout = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const [isLoadingLogout, setIsLoadingLogout] = useState(false);

  const handleClickLogout = async (e) => {
    e.preventDefault();
    try {
      setIsLoadingLogout(true);
      await logoutService();
      toast.success("Sesión finalizada con exito.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error al cerrar la sesión");
    } finally {
      setIsLoadingLogout(false);
      setUser();
      setToken();
      navigate("/login", { replace: true });
    }
  };

  return {
    isLoadingLogout,
    handleClickLogout,
  };
};

export default useLogout;
