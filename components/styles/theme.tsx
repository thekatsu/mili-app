import type { Theme } from "@react-navigation/native";

export const themes: { [any: string]: Theme } = {
  light: {
    dark: false,
    colors: {
      primary: "rgb(0, 0, 0)",
      background: "rgb(255, 255, 255)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(216, 216, 216)",
      notification: "rgb(255, 59, 48)",
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: "rgb(255, 255, 255)",
      background: "rgb(0, 0, 0)",
      card: "rgb(39, 39, 41)",
      text: "rgb(229, 229, 231)",
      border: "rgb(39, 39, 41)",
      notification: "rgb(255, 69, 58)",
    },
  },
};
