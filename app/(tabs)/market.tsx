import { useLocalSearchParams } from "expo-router";
import { ScrollView, View, StyleSheet } from "react-native";
import { useState } from "react";
import {
  Text,
  SegmentedButtons,
  Avatar,
  IconButton,
  Card,
} from "react-native-paper";
import Constants from "expo-constants";
import { MarketPageViewProps, TradePositionType } from "../../types/markets";

import Comment from "../../components/Comment";
import MarketTradeItem from "../../components/MarketTradeItem";
import PositionsHalf from "../../components/PositionsHalf";

const mockProps: MarketPageViewProps = {
  id: 12456,
  question: "Will the price of Bitcoin be above $100,000 on December 31, 2022?",
  closingDate: "Sep 30",
  authorName: "John Doe",
  price: 45,
  numberOfTraders: 100,
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  comments: [
    {
      authorName: "John Doe",
      comment:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      date: "1d",
    },
    {
      authorName: "Nikita Medvediev",
      comment:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      date: "1d",
    },

    {
      authorName: "Fuck you",
      comment:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      date: "1d",
    },
    {
      authorName: "No Name Bitch",
      comment:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      date: "1d",
    },
  ],
  trades: [
    {
      traderName: "Mykyta",
      trade: "traded 30 shares of YES for 0.30",
    },
    {
      traderName: "No Name Bitch",
      trade: "traded 10 shares of NO for 0.12",
    },
  ],
  positions: [
    {
      authorName: "John Doe",
      totalPosition: 100,
      positionType: TradePositionType.YES,
    },
    {
      authorName: "Nikita",
      totalPosition: 84_000,
      positionType: TradePositionType.YES,
    },
    {
      authorName: "Nikita",
      totalPosition: 84_000,
      positionType: TradePositionType.NO,
    },
    {
      authorName: "John Doe",
      totalPosition: 100,
      positionType: TradePositionType.NO,
    },
  ],
};

export default function MarketView() {
  const local = useLocalSearchParams();
  const [value, setValue] = useState("comments");

  return (
    <ScrollView style={styles.container}>
      <Text style={{ color: "white" }}>Market {local.id}</Text>

      <Text variant="headlineSmall" style={styles.question}>
        {mockProps.question}
      </Text>

      {/* Author row */}
      <View style={styles.authorAndClosingDate}>
        <View style={styles.avatarAndName}>
          <Avatar.Icon style={styles.avatar} size={24} icon="account" />
          <Text variant="bodySmall" style={styles.authorName}>
            {mockProps.authorName}
          </Text>
        </View>

        <View style={styles.dataAndTraders}>
          <View style={styles.tradersUnit}>
            <IconButton disabled icon="account" size={18} />
            <Text style={{ marginLeft: -10 }} variant="bodySmall">
              {mockProps.numberOfTraders}
            </Text>
          </View>

          <Text variant="bodySmall" style={styles.closingDate}>
            Closes on {mockProps.closingDate}
          </Text>
        </View>
      </View>

      <Text style={{ color: "white" }}>{mockProps.price}</Text>
      <Text variant="bodyMedium" style={{ color: "white" }}>
        {mockProps.description}
      </Text>

      {/* 
        Bottom area for comments, trades, and positions
      */}
      <View style={styles.commentArea}>
        <SegmentedButtons
          style={styles.segmentedButtons}
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
              <Comment
                i={i}
                comment={comment.comment}
                data={comment.date}
                authorName={comment.authorName}
              />
            ))}
          </View>
        )}

        {value === "trades" && (
          <View>
            {mockProps.trades.map((trade, i) => (
              <MarketTradeItem
                i={i}
                trade={trade.trade}
                traderName={trade.traderName}
              />
            ))}
          </View>
        )}

        {value === "positions" && (
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <PositionsHalf
                positions={mockProps.positions}
                positionType={TradePositionType.YES}
              />
              <PositionsHalf
                positions={mockProps.positions}
                positionType={TradePositionType.NO}
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
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
  dataAndTraders: {
    flexDirection: "row",
    alignItems: "center",
  },
  tradersUnit: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  avatar: {
    marginRight: 10,
  },
  authorName: {
    color: "#DEDEDE",
  },
  closingDate: {
    marginLeft: 25,
  },
  commentArea: {
    marginVertical: 20,
  },
  segmentedButtons: {
    marginBottom: 10,
  },
});
