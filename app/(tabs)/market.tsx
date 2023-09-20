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
            <IconButton icon="account" size={18} />
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
              <Card key={i} style={styles.comment}>
                <Card.Content>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 5,
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Icon
                        style={{ marginRight: 10 }}
                        size={18}
                        icon="account"
                      />
                      <Text>{comment.authorName}</Text>
                    </View>
                    <Text>{comment.date}</Text>
                  </View>
                  <Text variant="bodyMedium">{comment.comment}</Text>
                </Card.Content>
              </Card>
            ))}
          </View>
        )}

        {value === "trades" && (
          <View>
            {mockProps.trades.map((trade, i) => (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Avatar.Icon
                  style={{ marginRight: 5 }}
                  size={22}
                  icon="account"
                />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {trade.traderName}{" "}
                </Text>
                <Text style={{ color: "white" }}>{trade.trade}</Text>
              </View>
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
              <View
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Text style={{ marginBottom: 10 }}>
                  {
                    mockProps.positions.filter(
                      (position) =>
                        position.positionType === TradePositionType.YES
                    ).length
                  }{" "}
                  YES payouts
                </Text>
                {mockProps.positions
                  .filter(
                    (position) =>
                      position.positionType === TradePositionType.YES
                  )
                  .map((position, i) => (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginVertical: 5,
                      }}
                    >
                      <Avatar.Icon
                        style={{ marginRight: 10 }}
                        size={18}
                        icon="account"
                      />
                      <Text style={{ color: "white", marginRight: 10 }} key={i}>
                        {position.authorName}
                      </Text>
                      <Text>${position.totalPosition}</Text>
                    </View>
                  ))}
              </View>

              <View
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Text style={{ marginBottom: 10 }}>
                  {
                    mockProps.positions.filter(
                      (position) =>
                        position.positionType === TradePositionType.NO
                    ).length
                  }{" "}
                  NO payouts
                </Text>
                {mockProps.positions
                  .filter(
                    (position) => position.positionType === TradePositionType.NO
                  )
                  .map((position, i) => (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginVertical: 5,
                      }}
                    >
                      <Avatar.Icon
                        style={{ marginRight: 10 }}
                        size={18}
                        icon="account"
                      />
                      <Text style={{ color: "white", marginRight: 10 }} key={i}>
                        {position.authorName}
                      </Text>
                      <Text>${position.totalPosition}</Text>
                    </View>
                  ))}
              </View>
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
  price: {},
  description: {},
  position: {},
  trade: {},
  commentArea: {
    marginVertical: 20,
  },
  comment: {
    marginBottom: 10,
  },
  segmentedButtons: {
    marginBottom: 10,
  },
});
