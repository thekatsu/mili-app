import { View } from "react-native";
import OrderList from "../order-list";

export default function OrderListScreen() {
  return (
    <View className="flex-1 gap-2 p-2 bg-white">
      <OrderList />
    </View>
  );
}
