import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import {
  Text,
  SegmentedButtons,
  SegmentedButtonsProps,
  Avatar,
} from "react-native-paper";
import Constants from "expo-constants";
import { MarketPageViewProps } from "../../types/markets";

const mockProps: MarketPageViewProps = {
  id: 12456,
  question: "Will the price of Bitcoin be above $100,000 on December 31, 2022?",
  closingDate: "Sep 30",
  authorName: "John Doe",
  //   avatar: <Avatar.Icon size={24} icon="account" />,
  price: 45,
  numberOfTraders: 100,
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  comments: [
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  ],
  trades: [
    "traded 30 shares of YES for 0.30",
    "traded 10 shares of NO for 0.12",
  ],
  positions: ["Rayan got 2553 on NO", "Lory got 2234 on YES"],
};

export default function MarketView() {
  const local = useLocalSearchParams();
  const [value, setValue] = useState("comments");

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Market {local.id}</Text>

      <Text variant="headlineSmall" style={styles.question}>
        {mockProps.question}
      </Text>

      <View style={styles.avatarAndName}>
        <Avatar.Icon style={styles.avatar} size={24} icon="account" />
        <Text style={styles.authorName}>{mockProps.authorName}</Text>
      </View>
      <Text style={{ color: "white" }}>{mockProps.closingDate}</Text>
      <Text style={{ color: "white" }}>{mockProps.price}</Text>
      <Text style={{ color: "white" }}>{mockProps.description}</Text>
      <Text style={{ color: "white" }}>{mockProps.numberOfTraders}</Text>

      {/* 
        Bottom area for comments, trades, and positions
      */}
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          { label: "Comments", value: "comments" },
          { label: "Trades", value: "trades" },
          { label: "Positions", value: "positions" },
        ]}
      />

      {value === "comments" && (
        <View>
          <Text style={{ color: "white" }}>{mockProps.comments.length}</Text>
          {mockProps.comments.map((comment, i) => (
            <Text style={{ color: "white" }} key={i}>
              {comment}
            </Text>
          ))}
        </View>
      )}

      {value === "trades" && (
        <View>
          <Text style={{ color: "white" }}>{mockProps.trades.length}</Text>
          {mockProps.trades.map((trade, i) => (
            <Text style={{ color: "white" }} key={i}>
              {trade}
            </Text>
          ))}
        </View>
      )}

      {value === "positions" && (
        <View>
          <Text style={{ color: "white" }}>{mockProps.positions.length}</Text>
          {mockProps.positions.map((position, i) => (
            <Text style={{ color: "white" }} key={i}>
              {position}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 5,
    color: "white",
    marginHorizontal: 20,
  },
  question: {
    color: "white",
    marginVertical: 10,
    fontWeight: "bold",
  },
  avatarAndName: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    marginRight: 10,
  },
  authorName: {
    color: "#DEDEDE",
  },
  price: {},
  description: {},
  comment: {},
  position: {},
  trade: {},
});
