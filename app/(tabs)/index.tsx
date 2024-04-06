import { cn } from "@/components/lib/utils";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import { Alert, SectionList, Text, View } from "react-native";
import { Badge } from "@/components/ui/Badge";

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

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function TabOneScreen() {
  const [section, setSection] = useState<SectionListData[]>([]);

  async function fetchSection() {
    try {
      const res = await fetch(
        "http://192.168.2.2:3000/api/v1/product-by-group",
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

  useEffect(() => {
    fetchSection();
  }, []);

  return (
    <View className="p-3">
      <Badge label="New" />
      <Badge label="Archived" variant="secondary" />
      <Badge label="Error" variant="destructive" />
      <Badge label="Accepted" variant="success" />
      <SectionList
        sections={section}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index, section, separators }) => (
          <View
            className={cn("bg-slate-400 flex-row", {
              "rounded-t-xl": index == 0,
              "rounded-b-xl": index == section.data.length - 1,
            })}
          >
            <View className="p-2">
              {!item.image && (
                <View style={{ flex: 1, height: 50, width: 50 }}>
                  <Text
                    style={{
                      flex: 1,
                      height: 50,
                      width: 50,
                      textAlign: "center",
                      textAlignVertical: "center",
                    }}
                  >
                    {item.name[0].toUpperCase()}
                  </Text>
                </View>
              )}
              {item.image && (
                <Image
                  source={item.image}
                  //className="flex-1 h-12 w-12"
                  style={{
                    flex: 1,
                    width: 60,
                    height: 60,
                    backgroundColor: "#0553",
                    borderRadius: 10,
                  }}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                />
              )}
            </View>
            <View className="flex-1">
              <Text className="flex-1 capitalize text-base">
                {item.name.toLowerCase()}
              </Text>
              <View className="flex-1 flex-row">
                {item.tags.map((tag) => (
                  <Badge key={tag.id} label={tag.name} variant={"default"} />
                ))}
              </View>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="font-bold text-lg mt-4">{title.toUpperCase()}</Text>
        )}
      />
    </View>
  );
}
