import { UserRegisterInfo } from "../types/auth";
import setToken from "./setToken";

export default async function register(payload: UserRegisterInfo) {
  fetch("http://192.168.56.1:8080/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((jsonObj) => setToken(jsonObj));
}
