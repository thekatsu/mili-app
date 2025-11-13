import { forwardRef } from "react";
import { ActivityIndicator, Text, TextInput, View } from "react-native";

import { cn } from "../lib/utils";
import { Button } from "./Button";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
  loading?: boolean;
  onClear?: () => void;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    {
      className,
      label,
      labelClasses,
      inputClasses,
      value = "",
      loading = false,
      onClear,
      ...props
    },
    ref
  ) => {
    return (
      <View
        className={cn("flex flex-col gap-1.5 border border-input", className)}
      >
        {label && (
          <Text className={cn("text-base", labelClasses)}>{label}</Text>
        )}
        <View className="flex-row items-center">
          <TextInput
            className={cn(inputClasses, "flex-1 py-2.5 px-4 rounded-lg")}
            ref={ref}
            {...props}
            value={value ? value : undefined}
          />
          {loading && (
            <ActivityIndicator
              size={"large"}
              className="flex-shrink-1 h-10"
              animating={loading}
            />
          )}
          {loading === false && (value || value === undefined) && (
            <Button
              label="x"
              variant={"default"}
              size={"lg"}
              labelClasses="text-primary"
              className="bg-transparent flex-shrink-1 px-3"
              onPress={onClear}
            />
          )}
        </View>
      </View>
    );
  }
);

export { Input };
