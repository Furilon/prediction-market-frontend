import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import MarketFullCard from "../../components/MarketFullCard";
import Constants from "expo-constants";

export default function Home() {
  return (
    <View style={styles.container}>
      <MarketFullCard
        price={45}
        question="Will the price of Bitcoin be above $100,000 on December 31, 2021?"
        authorName="John Doe"
        // avatar={<Avatar.Icon size={24} icon="account" />}
        numberOfTraders={100}
        numberOfComments={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 3,
  },
});
