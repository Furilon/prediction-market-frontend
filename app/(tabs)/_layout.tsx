import FontAwesome from "@expo/vector-icons/FontAwesome";
import TabBarIcon from "../../components/TabBarIcon";
import { Redirect, Tabs } from "expo-router";
import { useState, useEffect } from "react";
import isToken from "../../utils/isToken";
import { useSession } from "../../context/AuthContext";
import { Text } from "react-native-paper";

export default function TabLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
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
