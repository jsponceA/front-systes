import { axiosPrivate } from "../../plugins/axios";

const todosLosUsuariosService = async (params) => {
  const response = await axiosPrivate.get("usuarios", { params });
  return response;
};
const crearUsuarioService = async (id) => {
  const response = await axiosPrivate.get(`usuarios/${id}`);
  return response;
};
const usuarioPorIdService = async (data) => {
  const response = await axiosPrivate.post("usuarios", data);
  return response;
};
const modificarUsuarioService = async (id, data) => {
  const response = await axiosPrivate.put(`usuarios/${id}`, data);
  return response;
};
const eliminarUsuarioService = async (id) => {
  const response = await axiosPrivate.delete(`usuarios/${id}`);
  return response;
};
export {
  todosLosUsuariosService,
  crearUsuarioService,
  usuarioPorIdService,
  modificarUsuarioService,
  eliminarUsuarioService,
};
