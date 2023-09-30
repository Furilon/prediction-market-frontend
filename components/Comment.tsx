import { Card, Avatar, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function Comment({ ...props }) {
  return (
    <Card key={props.i} style={styles.comment}>
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 5,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Avatar.Icon style={{ marginRight: 10 }} size={18} icon="account" />
            <Text>{props.authorName}</Text>
          </View>
          <Text>{props.date}</Text>
        </View>
        <Text variant="bodyMedium">{props.comment}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  comment: {
    marginBottom: 10,
  },
});
