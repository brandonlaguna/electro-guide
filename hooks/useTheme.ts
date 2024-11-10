import { useColorScheme, StyleSheet } from "react-native";
import themesOptions from "@/theme/themeOptions";

const useThemeProvider = () => {
  const colorScheme = useColorScheme();
  const theme = {
    ...styles,
    fontSize: { base: 15 },
    themeContainerStyle:
      colorScheme === "light"
        ? themesOptions["light"].palette.container
        : themesOptions["dark"].palette.container,
    themeTextStyle:
      colorScheme === "light"
        ? themesOptions["light"].palette.text
        : themesOptions["dark"].palette.text,
    tabBar:
      colorScheme === "light"
        ? themesOptions["light"].palette.tabBar
        : themesOptions["dark"].palette.tabBar,
    drawer:
      colorScheme === "light"
        ? themesOptions["light"].palette.drawer
        : themesOptions["dark"].palette.drawer,
    mainLayout:
      colorScheme === "light"
        ? themesOptions["light"].palette.mainLayout
        : themesOptions["dark"].palette.mainLayout,
    typography:
      colorScheme === "light"
        ? themesOptions["light"].palette.typography
        : themesOptions["dark"].palette.typography,
    stepButtonArrow:
      colorScheme === "light"
        ? themesOptions["light"].palette.stepButtonArrow
        : themesOptions["dark"].palette.stepButtonArrow,
    buttonAnswerStep:
      colorScheme === "light"
        ? themesOptions["light"].palette.buttonAnswerStep
        : themesOptions["dark"].palette.buttonAnswerStep,
    textInput:
      colorScheme === "light"
        ? themesOptions["light"].palette.textInput
        : themesOptions["dark"].palette.textInput,
    mainButton:
      colorScheme === "light"
        ? themesOptions["light"].palette.mainButton
        : themesOptions["dark"].palette.mainButton,
  };

  return theme;
};

const styles = StyleSheet.create({});

export default useThemeProvider;
