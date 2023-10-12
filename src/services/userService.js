import api from "../axiosConfig";

export const fetchUserData = async () => {
  return await api.get("/");
};
