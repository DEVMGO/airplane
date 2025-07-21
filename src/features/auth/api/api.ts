import { publicHttpService } from "../../../http-service/http-service";
import type { ResLoginType } from "./types";

export const postLoginApi = async (body: {
  username: string;
  password: string;
}): Promise<ResLoginType> => {
  return publicHttpService
    .post("/login", body)
    .then((response) => response.data);
};
