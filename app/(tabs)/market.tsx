import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function MarketView() {
  const local = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Market {local.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 3,
  },
});
