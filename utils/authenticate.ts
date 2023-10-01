import { UserAuthInfo } from "../types/auth";

const URL1 = "http://192.168.56.1:8080/auth/authenticate";
const URL2 = "http://11.27.87.67:8080/auth/authenticate";

export default async function authenticate(payload: UserAuthInfo) {
  console.log("Calling authenticate");
  let response;
  try {
    response = await fetch(URL1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    console.log("Error: " + e);
    return null;
  }
  const json = await response.json();
  console.log("Printing json: " + json);
  const token = json.token;
  console.log("Printing token: " + token);
  return token;
}
