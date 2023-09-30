import { axiosPrivate } from "../../plugins/axios";
const todosLosVentasService = async (params) => {
  const response = await axiosPrivate.get("ventas", { params });
  return response;
};
export { todosLosVentasService };
