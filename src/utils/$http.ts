import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { authToken } from "@/store/user.atom";

export const requestInterceptor = async (config) => {
  try {
    if (config.method !== "get" && config.method !== "delete") {
      if (config.data) {
        config.data = { ...(config?.data ?? {})};
      }
      // @ts-ignore
      config.body = config.data;
    }

    if (["get", "head"].includes(config.method.toLowerCase())) {
      Reflect.deleteProperty(config, "body");
    }
    // if (!config.timeout && config.method === "get") {
    //   config.timeout = 15900; // timeout after 3 seconds of no response
    // }

    if (!config.headers["authorization"]) {
      if (config.headers.set) {
        config.headers.set("Authorization", "Bearer " + authToken.get()?.token);
      } else {
        config.headers["authorization"] = `Bearer ${authToken.get()?.token}`;
      }
    }
  } catch (e) {
    console.table({ error: e, code: "Interceptor handler" });
  }
  return config;
};

export const responseErrorInterceptor = async (
  axiosResponse,
) => {
  const resp = axiosResponse?.response ?? axiosResponse;
//   if (resp?.status === 401) {
//     logoutModal.set(true);
//   }
  if (!resp?.status) {
    toast.error("Seems you are experiencing problems with connectivity");
  }
  throw axiosResponse;
};
