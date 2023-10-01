import TabBarIcon from "../../components/TabBarIcon";
import { Redirect, Tabs } from "expo-router";
import { useSession } from "../../context/AuthContext";
import { Text } from "react-native-paper";

export default function TabLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    console.log("loading");
    return <Text>Loading...</Text>;
  }

  if (!session) {
    console.log("null session, redirecting to login");
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Questions",
          tabBarIcon: () => <TabBarIcon name="newspaper-o" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <TabBarIcon name="user-o" />,
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
