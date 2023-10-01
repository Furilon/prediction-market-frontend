import { UserRegisterInfo } from "../types/auth";
import setToken from "./setToken";

export default async function register(payload: UserRegisterInfo) {
  const response = await fetch("http://192.168.56.1:8080/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Connection: "keep-alive",
    },
    body: JSON.stringify(payload),
  });

  const jsonObj = await response.json();
  const token = jsonObj.token;

  return token;
}
