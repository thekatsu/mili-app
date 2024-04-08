import { Text, View } from "react-native";
import { Image, ImageProps } from "expo-image";
import { cssInterop } from "nativewind";
import { cn } from "../lib/utils";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Component = function ({
  style,
  className,
  source,
  alt,
  ...props
}: ImageProps) {
  alt = alt ? alt : " ";
  //"flex-1 justify-center items-center h-[60px] w-[60px]"

  return (
    <View style={style}>
      {(source === "" || source === null) && (
        <Text
          className="text-3xl"
          //style={style}
        >
          {alt[0].toUpperCase()}
        </Text>
      )}
      {source && (
        <Image
          placeholder={blurhash}
          style={style}
          source={source}
          alt={alt}
          {...props}
        />
      )}
    </View>
  );
};

export const ProductImage = cssInterop(Component, {
  className: {
    target: "style",
  },
});
