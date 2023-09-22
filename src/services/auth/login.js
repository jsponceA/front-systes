import { axiosPrivate } from "../../plugins/axios";

const loginService = async (data) => {
  const response = await axiosPrivate.post("auth/login", data);
  return response;
};

export { loginService };
