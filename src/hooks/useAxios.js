import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

export default function useAxios() {
  const apiClient = axios.create({
    baseURL: url,
  });

  apiClient.interceptors.request.use(function (config) {
    return config;
  });

  return apiClient;
}
