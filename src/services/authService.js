import api from "../axiosConfig";

export const signup = async (data) => {
  return await api.post("/auth/signup", data);
};

export const signin = async (data) => {
  return await api.post("/auth/signin", data);
};

export const signout = async () => {
  return await api.post("/auth/signout");
};
