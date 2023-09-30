import getToken from "./getToken";

export default async function getMarkets(token: string) {
  const response = await fetch("http://192.168.56.1:8080/markets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json();

  return json;
}
