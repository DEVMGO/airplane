import jsCookie from "js-cookie";
import { DefaultRoutes } from "./default-routes";
import { ProtectedRoutes } from "./protected-routes";


export const Router = () => {
  const token = jsCookie.get("token");
  const isLogin = !!token;
  return isLogin ? <ProtectedRoutes /> : <DefaultRoutes />
}
