import axios from "axios";
import { requestInterceptor, responseErrorInterceptor } from "@/utils/$http";
import { v4 as uuidv4 } from "uuid";

const cacheSetup = (axiosConfig) => {
  const $axios = axios.create(axiosConfig);
  return {
    $http: $axios,
    $axios,
  };
};

export const { $http, $axios } = cacheSetup({
  baseURL: import.meta.env["VITE_BASE_API_URL"],
  headers: {
    requestSession: JSON.stringify({
      processId: Date.now(),
      userSystemId: uuidv4(),
    }),
  },
});

export const Axios = axios;

// $http.interceptors.request.use(requestInterceptor);

$http.interceptors.response.use((res) => res, responseErrorInterceptor);

export default $http;
