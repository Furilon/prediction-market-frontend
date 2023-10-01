import { Avatar, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function MarketTradeItem({ ...props }) {
  return (
    <View
      key={props.i}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <Avatar.Icon style={{ marginRight: 5 }} size={22} icon="account" />
      <Text style={{ fontWeight: "bold" }}>{props.traderName} </Text>
      <Text>{props.trade}</Text>
    </View>
  );
}
