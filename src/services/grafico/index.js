import { axiosPrivate } from "../../plugins/axios";

const todosLosGraficosService = async (params) => {
  const response = await axiosPrivate.get("graficos", { params });
  return response;
};

export { todosLosGraficosService };
