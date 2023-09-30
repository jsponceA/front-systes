import { axiosPrivate } from "../../plugins/axios";

const todosLosArchivosService = async (params) => {
  const response = await axiosPrivate.get("archivos", { params });
  return response;
};

const archivoPorIdService = async (id) => {
  const response = await axiosPrivate.get(`archivos/${id}`);
  return response;
};
const crearArchivoService = async (data) => {
  const response = await axiosPrivate.post("archivos", data);
  return response;
};

export { todosLosArchivosService, archivoPorIdService, crearArchivoService };
