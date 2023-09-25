import { axiosPrivate } from "../../plugins/axios";

const logoutService = async () => {
  const response = await axiosPrivate.post("auth/logout");
  return response;
};

export { logoutService };
