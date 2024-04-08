import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, Text } from "react-native";
import { Button } from "@/components/ui/Button";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size?: number;
  style?: any;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFF",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pedidos",
          tabBarLabel: "Pedidos",
          tabBarStyle: {
            height: 60,
          },
          tabBarItemStyle: {
            marginBottom: 8,
            marginTop: 8,
          },
          headerRightContainerStyle: {
            marginRight: 4,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="tag" color={color} />,
          headerRight: () => (
            <Link href="/search-item/" asChild>
              <Button
                label="Novo"
                size={"lg"}
                variant={"ghost"}
                className="bg-blue-400"
              />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="/search-item/"
        options={{
          title: "Adicionar Item ao Pedido",
          href: null,
          tabBarLabel: "Item",
          tabBarIcon: ({ color }) => <TabBarIcon name="tag" color={color} />,
        }}
      />
    </Tabs>
  );
}
