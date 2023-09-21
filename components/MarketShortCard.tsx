import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text, Avatar, IconButton } from "react-native-paper";
import { MarketShortCardProps } from "../types/markets";
import { router } from "expo-router";

export default function MarketShortCard(
  props: MarketShortCardProps
): JSX.Element {
  return (
    <Card onPress={() => router.push(`/market?id=${props.id}`)}>
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Avatar.Icon size={24} icon="account" />
          <Text variant="bodyLarge" style={{ marginLeft: 10 }}>
            {props.question}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text>{props.price}%</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <IconButton disabled icon="account" size={24} />
            <Text style={{ marginLeft: -10 }}>{props.numberOfTraders}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
