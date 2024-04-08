import { View, Text } from "react-native";
import { ProductImage } from "../product-image";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { memo } from "react";

type SectionListData = {
  data: {
    id: string;
    name: string;
    image: string;
    tags: {
      id: string;
      name: string;
    }[];
  };
};

function ListItem({ data }: SectionListData) {
  return (
    <View className="flex-row mb-2 p-2 gap-2 bg-slate-400 items-center justify-center rounded-xl">
      <View className="justify-center items-center">
        <ProductImage
          source={data.image}
          className="h-[60px] w-[60px] bg-slate-600 rounded-lg justify-center items-center"
          contentFit="cover"
          transition={500}
          alt={data.name}
        />
      </View>
      <View className="flex-1 gap-2">
        <Text
          className="capitalize text-base leading-none font-medium"
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          {data.name}
        </Text>
        <View className="flex-1 flex-row flex-wrap gap-1">
          {data.tags.map((tag) => (
            <Badge
              key={tag.id}
              label={tag.name}
              className=""
              labelClasses="text-xxs font-normal"
            />
          ))}
        </View>
      </View>
      <View className="flex-shrink flex-row gap-1">
        <Button label="-" className="h-[60px] w-[35px]" variant={"secondary"} />
        <Button label="+" className="h-[60px] w-[35px]" />
      </View>
    </View>
  );
}

export const ProductListItem = memo(ListItem, (prev, next) => prev === next);
