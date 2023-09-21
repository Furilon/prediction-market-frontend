import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text, Avatar, IconButton } from "react-native-paper";
import Constants from "expo-constants";
import MarketShortCard from "../../components/MarketShortCard";
import { MarketShortCardProps } from "../../types/markets";

const mockProps: MarketShortCardProps[] = [
  {
    id: 1,
    price: 2,
    question: "Will he propose to me by 2025?",
    numberOfTraders: 123,
  },
  {
    id: 2,
    price: 46,
    question: "Will AMD stock price be above $100 by 2025?",
    numberOfTraders: 1000,
  },
  {
    id: 3,
    price: 32,
    question: "Will Joe Biden be president on January 1, 2022?",
    numberOfTraders: 23,
  },
  {
    id: 4,
    price: 99,
    question:
      "Will the price of Bitcoin be above $100,000 on December 31, 2021?",
    numberOfTraders: 5864,
  },
];

export default function Questions() {
  return (
    <ScrollView style={styles.container}>
      {mockProps.map((props, i) => (
        <MarketShortCard {...props} key={i} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 3,
  },
});
