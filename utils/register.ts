import { UserRegisterInfo } from "../types/auth";
import setToken from "./setToken";

export default async function register(payload: UserRegisterInfo) {
  try {
    const response = await fetch("http://192.168.56.1:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Connection: "keep-alive",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Error registering user");
    }

    const jsonObj = await response.json();
    await setToken(jsonObj);

    return jsonObj;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
