import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import MarketFullCard from "../../components/MarketFullCard";
import Constants from "expo-constants";

export default function Home() {
  return (
    <View style={styles.container}>
      <MarketFullCard
        id={12456}
        price={45}
        question="Will the price of Bitcoin be above $100,000 on December 31, 2021?"
        authorName="John Doe"
        // avatar={<Avatar.Icon size={24} icon="account" />}
        numberOfTraders={100}
        numberOfComments={10}
      />
      <MarketFullCard
        id={223}
        price={99}
        question="Will Joe Biden be president on January 1, 2022?"
        authorName="Nikita Medvedev"
        // avatar={<Avatar.Icon size={24} icon="account" />}
        numberOfTraders={1}
        numberOfComments={22}
      />
      <MarketFullCard
        id={1}
        price={2}
        question="Will he propose to me by 2025?"
        authorName="Polina Medvedeva"
        // avatar={<Avatar.Icon size={24} icon="account" />}
        numberOfTraders={1234}
        numberOfComments={24}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 3,
  },
});
