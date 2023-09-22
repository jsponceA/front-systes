import Icon from "@mdi/react";
import { mdiLogin, mdiAccount, mdiLock } from "@mdi/js";
import useLogin from "../../hooks/auth/useLogin";
import ButtonLoader from "../../components/ButtonLoader";

const Login = () => {
  const {
    login,
    isLoadingLogin,
    handleSubmitLogin,
    handleChangeInputFormLogin,
  } = useLogin();

  return (
    <div className="container-fluid h-100">
      <div className="row h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="col-md-4 ">
          <div className="card bg-light bg-opacity-50">
            <div className="card-body shadow-lg">
              <form onSubmit={handleSubmitLogin}>
                <div className="row">
                  <div className="col-md-12 mb-2">
                    <p className="text-center mb-1 fw-bold fs-4">
                      INICIO DE SESIÓN
                    </p>
                    <div className="text-center">
                      <img
                        src="/logo_nobg.png"
                        alt=""
                        style={{ width: "250px", height: "180px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-floating ">
                      <input
                        onChange={handleChangeInputFormLogin}
                        type="text"
                        required
                        className="form-control"
                        id="txtUsuario"
                        name="usuario"
                        placeholder=""
                        value={login.usuario}
                      />
                      <label htmlFor="txtUsuario">
                        <Icon path={mdiAccount} size={1} /> Usuario
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-floating bg-transparent">
                      <input
                        onChange={handleChangeInputFormLogin}
                        type="password"
                        required
                        className="form-control "
                        id="txtClave"
                        name="clave"
                        placeholder=""
                        value={login.clave}
                      />
                      <label htmlFor="txtClave">
                        <Icon path={mdiLock} size={1} /> *********
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <ButtonLoader
                      className="btn bg-primary bg-gradient text-white"
                      label="INGRESAR AL SISTEMA"
                      labelLoader="Procesando..."
                      loader={isLoadingLogin}
                      icon={<Icon path={mdiLogin} size={1} />}
                      type="submit"
                    ></ButtonLoader>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
