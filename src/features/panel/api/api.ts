import { authHttpService } from "../../../http-service/http-service";
import type { ResFlightListType } from "./type";

export const getFlightListApi = async (page: number, size: number) => {
  const response = await authHttpService.get<ResFlightListType>(
    `/list?page=${page}&size=${size}`
  );
  return response.data;
};
