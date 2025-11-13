import { Text, View } from "react-native";

import { cn } from "../lib/utils";

function Card({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn("rounded-xl border border-border", className)}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn("p-4", className)} {...props} />;
}

function CardTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <Text
      className={cn(
        "text-2xl font-semibold tracking-tight text-primary",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <Text
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn("p-4 pt-0", className)} {...props} />;
}

// TODO: style
function CardFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn(className, "flex flex-row items-center p-4 pt-0")}
      {...props}
    />
  );
}

interface SimpleCardProps {
  className?: string;
  classNameHeader?: string;
  classNameLabelTitle?: string;
  classNameLabelDescription?: string;
  classNameLabelContent?: string;
  classNameLabelFooter?: string;
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
}
function SimpleCard({
  className,
  classNameHeader,
  classNameLabelTitle,
  classNameLabelDescription,
  classNameLabelContent,
  classNameLabelFooter,
  title,
  description,
  content,
  footer,
}: SimpleCardProps) {
  return (
    <Card className={className}>
      <CardHeader className={classNameHeader}>
        {title && (
          <Text
            className={cn(
              "text-2xl font-semibold tracking-tight text-primary",
              classNameLabelTitle
            )}
          >
            {title}
          </Text>
        )}
        {description && (
          <Text
            className={cn(
              "text-sm text-muted-foreground",
              classNameLabelDescription
            )}
          >
            {description}
          </Text>
        )}
      </CardHeader>
      {content && (
        <CardContent>
          <Text className={cn("text-base text-primary", classNameLabelContent)}>
            {content}
          </Text>
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          <Text
            className={cn(
              "text-sm text-muted-foreground",
              classNameLabelFooter
            )}
          >
            {footer}
          </Text>
        </CardFooter>
      )}
    </Card>
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  SimpleCard,
};
