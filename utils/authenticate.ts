import { UserAuthInfo } from "../types/auth";
import setToken from "./setToken";

export default async function authenticate(payload: UserAuthInfo) {
  fetch("http://192.168.56.1:8080/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((jsonObj) => setToken(jsonObj));
}
