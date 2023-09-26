import AsyncStorage from "@react-native-async-storage/async-storage";

const clearToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {
    console.error("Error clearing token:", error);
  }
};

export default clearToken;
