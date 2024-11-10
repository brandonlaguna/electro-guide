import { StyleSheet } from "react-native";
import { greyDark, greyLight, primary, whiteColor } from "./colors";

export const themeLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: greyDark[900],
  },
  tabBar: {
    backgroundColor: whiteColor.main,
    color: primary.main,
  },
  drawer: {
    backgroundColor: whiteColor.main,
    color: primary.main,
  },
  mainLayout: {
    backgroundColor: whiteColor.main,
  },
  textInput: {
    backgroundColor: primary.main,
    color: primary.main,
    borderColor: primary.main,
  },
  typography: {
    color: greyLight.main,
  },
  stepButtonArrow: {
    backgroundColor: greyLight[500],
    color: whiteColor.main,
  },
  buttonAnswerStep: {
    backgroundColor: greyLight[100],
    color: primary.main,
  },
  mainButton: {
    backgroundColor: primary.main,
    color: whiteColor.main,
  },
});
