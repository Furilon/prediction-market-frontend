import { Text, Card, Button, Avatar } from "react-native-paper";
import { MarketFullCardProps } from "../types/markets";
import { router } from "expo-router";

export default function MarketFullCard(props: MarketFullCardProps) {
  return (
    <Card onPress={() => router.push("/market?id=12345")}>
      <Card.Title
        title={props.question}
        subtitle={props.authorName}
        left={() => <Avatar.Icon size={24} icon="account" />}
      />
      <Card.Content>
        <Text>{props.price}%</Text>
      </Card.Content>
      <Card.Actions>
        <Button>{props.numberOfTraders}</Button>
        <Button>{props.numberOfComments}</Button>
      </Card.Actions>
    </Card>
  );
}
