import { useColorScheme, StyleSheet } from "react-native";
import themesOptions from "@/theme/themeOptions";

const useThemeProvider = () => {
  const colorScheme = useColorScheme();
  const theme = {
    ...styles,
    fontSize: { base: 16 },
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
  };

  return theme;
};

const styles = StyleSheet.create({});

export default useThemeProvider;
