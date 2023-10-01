import { Avatar, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { TradePosition } from "../types/markets";

export default function PositionsHalf({ ...props }) {
  return (
    <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
      <Text style={{ marginBottom: 10 }}>
        {
          props.positions.filter(
            (position: TradePosition) =>
              position.positionType === props.positionType
          ).length
        }{" "}
        YES payouts
      </Text>
      {props.positions
        .filter(
          (position: TradePosition) =>
            position.positionType === props.positionType
        )
        .map((position: TradePosition, i: number) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 5,
            }}
          >
            <Avatar.Icon style={{ marginRight: 10 }} size={18} icon="account" />
            <Text style={{ marginRight: 10 }} key={i}>
              {position.authorName}
            </Text>
            <Text>${position.totalPosition}</Text>
          </View>
        ))}
    </View>
  );
}
