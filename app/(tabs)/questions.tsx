import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Constants from "expo-constants";

export default function Questions() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Questions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 3,
  },
});
