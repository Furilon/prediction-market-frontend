import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Constants from "expo-constants";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 3,
  },
});
