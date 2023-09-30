import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const RedirectIsLogged = ({ element }) => {
  const token = useAuthStore((state) => state.token);
  return token ? <Navigate to={"/panel/inicio"} replace /> : element;
};

export default RedirectIsLogged;
