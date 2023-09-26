import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function setToken(token: string) {
  await AsyncStorage.setItem("token", JSON.stringify(token));
}
