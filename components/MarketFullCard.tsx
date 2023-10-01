import { Text, Card, Button, Avatar, IconButton } from "react-native-paper";
import { View } from "react-native";
import { MarketFullCardProps } from "../types/markets";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export default function MarketFullCard(props: MarketFullCardProps) {
  return (
    <Card
      style={styles.container}
      onPress={() => router.push(`/market?id=${props.id}`)}
    >
      <Card.Content>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Avatar.Icon style={{ marginRight: 10 }} size={22} icon="account" />
          <Text style={{ color: "#AAAAAA" }} variant="titleSmall">
            {props.authorName}
          </Text>
        </View>
        <Text variant="titleMedium" style={{ marginBottom: 10 }}>
          {props.question}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: 5,
          }}
        >
          <Text variant="titleMedium">{props.price}%</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton disabled icon="account" size={24} />
            <Text style={{ marginLeft: -10 }}>
              {Math.floor(Math.random() * 100)}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton disabled icon="comment" size={24} />
            <Text style={{ marginLeft: -10 }}>
              {Math.floor(Math.random() * 100)}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
