import { type VariantProps, cva } from "class-variance-authority";
import { Pressable, Text } from "react-native";

import { cn } from "../lib/utils";
import { forwardRef } from "react";

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        destructive: "bg-destructive",
        ghost: "bg-slate-700",
        link: "text-primary underline-offset-4",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      ghost: "text-primary-foreground",
      link: "text-primary-foreground underline",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof Pressable>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
}
const Button = forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  (
    { label, labelClasses, className, variant, size, ...props }: ButtonProps,
    ref
  ) => {
    return (
      <Pressable
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      >
        {({ pressed }) => (
          <Text
            className={cn(
              buttonTextVariants({
                variant,
                size,
                className: cn(labelClasses, { "opacity-50": pressed }),
              })
            )}
          >
            {label}
          </Text>
        )}
      </Pressable>
    );
  }
);

export { Button, buttonVariants, buttonTextVariants };
