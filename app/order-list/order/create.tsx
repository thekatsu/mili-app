import { Alert, Text } from "react-native";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { themes } from "@/components/styles/theme";
import { useDatabase } from "@nozbe/watermelondb/react";
import { Order } from "@/database/models/Order";
import { useState } from "react";
import { useColorScheme } from "nativewind";

export default function OrderCreate() {
  const database = useDatabase();
  const collection = database.get<Order>("orders");
  const [description, setDescription] = useState("");
  const { colorScheme } = useColorScheme();

  const handleOrderCreate = async () => {
    try {
      await database.write(async () => {
        await collection.create((order) => {
          order.shortDescription = description;
          order.total = 0;
          order.partnerId = "abc";
          order.openedAt = new Date();
        });
      });
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao criar comanda.", "Tente novamente!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          label="+"
          className="absolute right-3 bottom-3 rounded-full w-auto h-[70px]"
          labelClasses="text-4xl"
          variant={"default"}
          size={"lg"}
        />
      </DialogTrigger>
      <DialogContent className="gap-3 w-3/4">
        <Text className="font-semibold text-xl text-primary">Nova Comanda</Text>
        <Input
          keyboardType="default"
          className="bg-secondary"
          inputClasses="text-primary"
          placeholderTextColor={themes[colorScheme!!].colors.primary}
          placeholder="Descrição ou Cliente"
          onChangeText={setDescription}
          loading={false}
        />
        <Button label="Criar" onPress={handleOrderCreate} />
      </DialogContent>
    </Dialog>
  );
}
