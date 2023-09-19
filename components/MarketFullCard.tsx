import { Text, Card, Button, Avatar } from "react-native-paper";
import { MarketFullCardProps } from "../types/markets";

export default function MarketFullCard(props: MarketFullCardProps) {
  return (
    <Card>
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
