import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-main-content vh-100 ">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
