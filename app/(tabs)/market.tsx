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

      <View style={styles.authorAndClosingDate}>
        <View style={styles.avatarAndName}>
          <Avatar.Icon style={styles.avatar} size={24} icon="account" />
          <Text style={styles.authorName}>{mockProps.authorName}</Text>
        </View>
        <Text style={styles.closingDate}>
          Closes on {mockProps.closingDate}
        </Text>
      </View>
      <Text style={{ color: "white" }}>{mockProps.price}</Text>
      <Text style={{ color: "white" }}>{mockProps.description}</Text>
      <Text style={{ color: "white" }}>{mockProps.numberOfTraders}</Text>

      {/* 
        Bottom area for comments, trades, and positions
      */}
      <View>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              label: `${mockProps.comments.length} comments`,
              value: "comments",
            },
            { label: `${mockProps.trades.length} trades`, value: "trades" },
            {
              label: `${mockProps.positions.length} positions`,
              value: "positions",
            },
          ]}
        />

        {value === "comments" && (
          <View>
            {mockProps.comments.map((comment, i) => (
              <Text style={{ color: "white" }} key={i}>
                {comment}
              </Text>
            ))}
          </View>
        )}

        {value === "trades" && (
          <View>
            {mockProps.trades.map((trade, i) => (
              <Text style={{ color: "white" }} key={i}>
                {trade}
              </Text>
            ))}
          </View>
        )}

        {value === "positions" && (
          <View>
            {mockProps.positions.map((position, i) => (
              <Text style={{ color: "white" }} key={i}>
                {position}
              </Text>
            ))}
          </View>
        )}
      </View>
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
  },
  authorAndClosingDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    marginRight: 10,
  },
  authorName: {
    color: "#DEDEDE",
  },
  closingDate: {},
  price: {},
  description: {},
  comment: {},
  position: {},
  trade: {},
});
