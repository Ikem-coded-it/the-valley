import { toast } from "react-toastify";
import $http from "./$http";
import { S3Client } from "@aws-sdk/client-s3";

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

// s3Client
export const s3 = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

export const awsService = new Aws();
