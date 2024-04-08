import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  SimpleCard,
} from "@/components/ui/Card";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const ORDERS = [
  {
    id: "1",
    description: "Nicolas Faust",
  },
  {
    id: "2",
    description: "Diogo Goulart",
  },
  {
    id: "3",
    description: "Julio Scremim",
  },
  {
    id: "4",
    description: "Julio Scremim",
  },
  {
    id: "5",
    description: "Nicolas Faust",
  },
  {
    id: "6",
    description: "Diogo Goulart",
  },
  {
    id: "7",
    description: "Julio Scremim",
  },
  {
    id: "8",
    description: "Julio Scremim",
  },
];

function OrderCard({ item }: { item: (typeof ORDERS)[0] }) {
  return (
    <Card className="flex-1 bg-gray-600">
      <CardHeader className="flex-1 items-center justify-start">
        <CardTitle className="flex-1 text-center text-lg">
          #{`${item.id} - ${item.description}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Text>10 Produtos</Text>
      </CardContent>
      <CardFooter className="justify-end">
        <Text>Total: R$ 11,00</Text>
      </CardFooter>
    </Card>
  );
}

export default function Comands() {
  return (
    <View className="flex-1 flex-col p-2 gap-1">
      <SafeAreaView
        style={{
          flex: 1,
          // paddingTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          <View className="flex-1 gap-1">
            {ORDERS.filter((order) => {
              return parseInt(order.id) % 2 === 0;
            }).map((order) => (
              <OrderCard item={order} key={order.id} />
            ))}
          </View>
          <View className="flex-1 gap-1">
            {ORDERS.filter((order) => {
              return parseInt(order.id) % 2 !== 0;
            }).map((order) => (
              <OrderCard item={order} key={order.id} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
