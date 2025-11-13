import { useObserver } from "@/components/lib/hook";
import { SimpleCard } from "@/components/ui/Card";
import { Order } from "@/database/models";
import { useDatabase } from "@nozbe/watermelondb/react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import OrderCreate from "@/app/order-list/order/create";

export default function OrderList() {
  const database = useDatabase();
  const collection = database.get<Order>("orders");
  const [loading, orders] = useObserver<Order>(collection);

  return (
    <>
      <ScrollView className="flex-1">
        {loading && <Text>Carregando!!!</Text>}
        {orders.length === 0 && <Text>Nenhuma ordem no momento!</Text>}
        <View className="flex-1 flex-row gap-2">
          <View className="flex-1 flex-col gap-2">
            {orders.map((order, index) => {
              if (index % 2 === 0) {
                let items = [];
                order.items.then((orderItems) => {
                  items = orderItems;
                });

                return (
                  <Link
                    key={order.id}
                    href={{
                      pathname: "/order-list/order/[id]",
                      params: {
                        id: order.id,
                      },
                    }}
                    asChild
                  >
                    <Pressable>
                      <SimpleCard
                        className="bg-primary dark:bg-secondary"
                        classNameLabelTitle="text-secondary-foreground dark:text-primary text-base"
                        title={`${order.shortDescription || order.partnerId}`}
                        classNameLabelDescription="self-end"
                        description={`Cód.: ${order.id
                          .substring(0, 4)
                          .toLocaleUpperCase()} ás ${new Intl.DateTimeFormat(
                          "pt-BR",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          }
                        ).format(order.createdAt)}`}
                        content={`${items.length} itens`}
                        footer={`Total: ${Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(order.total)}`}
                      />
                    </Pressable>
                  </Link>
                );
              }
              return null;
            })}
          </View>
          <View className="flex-1 flex-col gap-2">
            {orders.map((order, index) => {
              if (index % 2 !== 0) {
                let items = [];
                order.items.then((orderItems) => {
                  items = orderItems;
                });

                return (
                  <Link
                    key={order.id}
                    href={{
                      pathname: "/order-list/order/[id]",
                      params: {
                        id: order.id,
                      },
                    }}
                    asChild
                  >
                    <Pressable>
                      <SimpleCard
                        className="bg-primary dark:bg-secondary"
                        classNameLabelTitle="text-secondary-foreground dark:text-primary text-base"
                        title={`${order.shortDescription || order.partnerId}`}
                        classNameLabelDescription="self-end"
                        description={`Cód.: ${order.id
                          .substring(0, 4)
                          .toLocaleUpperCase()} ás ${new Intl.DateTimeFormat(
                          "pt-BR",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          }
                        ).format(order.createdAt)}`}
                        content={`${items.length} itens`}
                        footer={`Total: ${Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(order.total)}`}
                      />
                    </Pressable>
                  </Link>
                );
              }
              return null;
            })}
          </View>
        </View>
      </ScrollView>
      <OrderCreate />
    </>
  );
}
