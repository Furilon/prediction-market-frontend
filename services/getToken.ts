import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getToken(): Promise<string | null> {
  const token = await AsyncStorage.getItem("token");
  return token != null ? JSON.parse(token) : null;
}
