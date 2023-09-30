import { axiosPrivate } from "../../plugins/axios";

const usuarioPorIdService = async (id) => {
  const response = await axiosPrivate.get(`perfil/${id}`);
  return response;
};
const modificarUsuarioService = async (id, data) => {
  const response = await axiosPrivate.post(`perfil/${id}`, data);
  return response;
};

export { usuarioPorIdService, modificarUsuarioService };
