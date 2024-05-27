import { toast } from "react-toastify";
import $http from "./$http";

class Aws {
  public async upload(params: any) {
    try {
      const res = await $http.post("/upload", params);

      return res.data.data;
    } catch (e) {
      toast.error(e.message);

      return e;
    }
  }
}

export const awsService = new Aws();
