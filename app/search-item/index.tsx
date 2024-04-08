import { useEffect, useState } from "react";
import { Alert, SectionList, Text, View } from "react-native";
import { ProductListItem } from "@/components/product-list-item";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "@/components/search";

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

export default function SearchItem() {
  const [section, setSection] = useState<SectionListData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  async function fetchSection(text: string) {
    try {
      const res = await fetch(
        `http://192.168.2.2:3000/api/v1/product-by-group?filter=${text}`,
        {
          method: "GET",
        }
      );

      const data: SectionListData[] = await res.json();

      setSection(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possivel obter as TAGs!");
    }
  }

  const handleProductFilter = useDebouncedCallback(async (value) => {
    await fetchSection(value);
    setLoading(false);
  }, 400);

  useEffect(() => {
    fetchSection("");
  }, []);

  return (
    <View className="flex-1 p-2 gap-2">
      <Search
        onChange={(value) => {
          setFilter(value);
          setLoading(true);
          handleProductFilter(value);
        }}
        onClear={() => {
          setFilter("");
          handleProductFilter("");
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
