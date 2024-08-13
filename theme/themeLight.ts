import { StyleSheet } from "react-native";
import { greyDark, primary, whiteColor } from "./colors";

export const themeLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "",
  },
  tabBar: {
    backgroundColor: primary.main,
    color: whiteColor.main,
  },
  drawer: {
    backgroundColor: primary.main,
    color: whiteColor.main,
  },
  mainLayout: {
    backgroundColor: whiteColor.main,
  },
  textInput: {
    backgroundColor: primary.main,
    color: greyDark[100],
  },
});
