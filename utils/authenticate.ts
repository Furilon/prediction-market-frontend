import { UserAuthInfo } from "../types/auth";

export default async function authenticate(payload: UserAuthInfo) {
  const response = await fetch("http://192.168.56.1:8080/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(payload),
  });

  const json = await response.json();
  const token = json.token;
  return token;
}
