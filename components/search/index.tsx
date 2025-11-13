import { ActivityIndicator, View } from "react-native";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function Search({
  value,
  onChange,
  loading = false,
  onClear,
}: {
  value: string;
  onChange: (text: string) => void;
  loading: boolean;
  onClear: () => void;
}) {
  return (
    <View className="flex-row bg-slate-300 rounded-md caret-purple-500 px-3 py-2">
      <Input
        className="flex-1 text-xl h-10"
        onChangeText={(text) => onChange(text)}
        value={value}
      />
      {loading && (
        <ActivityIndicator
          size={"large"}
          className="flex-shrink-1 -mr-2 h-10"
          animating={loading}
        />
      )}
      {loading === false && value !== "" && (
        <Button
          label="x"
          variant={"default"}
          size={"lg"}
          className="bg-transparent flex-shrink-1 px-3 -mt-2"
          labelClasses="text-white"
          onPress={() => {
            onClear();
          }}
          // labelClasses="leading-none text-xl"
        />
      )}
    </View>
  );
}
