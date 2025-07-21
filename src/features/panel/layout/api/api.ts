import { authHttpService } from "../../../../http-service/http-service";
import type { ResUsernameType } from "./type";

export const getUsernameApi = async () => {
  const response = await authHttpService.get<ResUsernameType>(`/username`);
  return response.data;
};

export const postLogoutApi = async (): Promise<{ result: string }> => {
  return authHttpService.post("/logout").then((response) => response.data);
};
