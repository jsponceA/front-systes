import { axiosPublic } from "../../plugins/axios";

const loginService = async (data) => {
  const response = await axiosPublic.post("auth/login", data);
  return response;
};

export { loginService };
