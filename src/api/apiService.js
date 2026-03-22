import axiosInstance from "./axiosInstance";

const apiService = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (err) {
    throw new Error(`Error: ${err.msg}`);
  }
};

export default apiService;
