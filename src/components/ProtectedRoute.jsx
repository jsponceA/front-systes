import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ProtectedRoute = ({ element }) => {
  const token = useAuthStore((state) => state.token);
  return token ? element : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
