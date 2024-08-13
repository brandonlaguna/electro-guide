import { StyleSheet } from "react-native";
import { greyDark, primary, whiteColor } from "./colors";

export const themeDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary.dark,
  },
  text: {
    color: greyDark[900],
  },
  tabBar: {
    backgroundColor: primary.dark,
    color: greyDark[900],
  },
  drawer: {
    backgroundColor: primary.dark,
    color: whiteColor.main,
  },
  mainLayout: {
    backgroundColor: greyDark.main,
  },
  textInput: {
    backgroundColor: whiteColor.main,
    color: whiteColor.main,
  },
});
