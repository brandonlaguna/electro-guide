import { StyleSheet } from "react-native";
import { greyDark, greyLight, primary, whiteColor } from "./colors";

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
    color: whiteColor[900],
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
    borderColor: primary.main,
  },
  typography: {
    color: whiteColor.main,
  },
  stepButtonArrow: {
    backgroundColor: whiteColor[800],
    color: greyDark[800],
  },
  buttonAnswerStep: {
    backgroundColor: greyLight[100],
    color: primary.main,
  },
  mainButton: {
    backgroundColor: whiteColor.main,
    color: primary.main,
  },
});
