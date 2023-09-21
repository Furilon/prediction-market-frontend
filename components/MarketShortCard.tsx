import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text, Avatar, IconButton } from "react-native-paper";
import { MarketShortCardProps } from "../types/markets";

export default function MarketShortCard(
  props: MarketShortCardProps
): JSX.Element {
  return (
    <Card>
      <Card.Content>
        <Avatar.Icon size={24} icon="account" />
        <Text>{props.question}</Text>
        <Text>{props.price}%</Text>
        <Text>{props.numberOfTraders}</Text>
      </Card.Content>
    </Card>
  );
}
