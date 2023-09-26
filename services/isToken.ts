import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function isToken() {
  const token = await AsyncStorage.getItem("token");
  return token ? true : false;
}
