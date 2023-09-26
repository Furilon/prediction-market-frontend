import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs } from "expo-router";
import { useState, useEffect } from "react";
import isToken from "../../services/isToken";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
}) {
  return (
    <FontAwesome
      size={28}
      color="white"
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
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
