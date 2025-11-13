import { useEffect, useState } from "react";
import { Alert, SectionList, Text, View } from "react-native";
import { ProductListItem } from "@/components/product-list-item";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "@/components/search";
import { useLocalSearchParams } from "expo-router";
import { Input } from "@/components/ui/Input";

type SectionListData = {
  id: string;
  title: string;
  data: {
    id: string;
    name: string;
    image: string;
    tags: {
      id: string;
      name: string;
    }[];
  }[];
};

export default function Order() {
  const [section, setSection] = useState<SectionListData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  const { id: order_id } = useLocalSearchParams();
  console.log(order_id);

  async function fetchSection(text: string) {}

  const handleProductFilter = useDebouncedCallback(async (value) => {
    await fetchSection(value);
    setLoading(false);
  }, 400);

  useEffect(() => {
    // fetchSection("");
  }, []);

  return (
    <View className="flex-1 gap-2 p-2 bg-primary-foreground">
      <Input
        className="bg-secondary"
        inputClasses="text-primary"
        onChangeText={(value) => {
          setFilter(value);
          setLoading(false);
          //   handleProductFilter(value);
        }}
        onClear={() => {
          console.log("limpa");
          setFilter("");
          //   handleProductFilter("");
        }}
        value={filter}
        loading={loading}
      />
      <SectionList
        sections={section}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            <Text>Nenhum produto a ser exibido no momento!</Text>
          </View>
        )}
        renderItem={({ item, index, section, separators }) => (
          <ProductListItem data={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="font-bold text-lg mt-2">{title.toUpperCase()}</Text>
        )}
      />
    </View>
  );
}
