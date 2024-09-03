import { alpha } from "../utilities/color";

/** Color for light Theme */
const primaryMain = "#0c265d";
export const primary = {
  main: primaryMain,
  dark: "#18171c",
  100: alpha(primaryMain, 0.08),
  200: alpha(primaryMain, 0.2),
  300: alpha(primaryMain, 0.3),
  400: alpha(primaryMain, 0.4),
};

const secondaryMain = "#48dbdb";
export const secondary = {
  main: secondaryMain,
  100: alpha(secondaryMain, 0.08),
  200: alpha(secondaryMain, 0.2),
  300: alpha(secondaryMain, 0.3),
  400: alpha(secondaryMain, 0.4),
};
const thirdMain = "#5099cd";

const mainWhite = "#ffffff";

export const whiteColor = {
  main: mainWhite,
  inherit: "#efefea",
  100: alpha(mainWhite, 0.1),
  200: alpha(mainWhite, 0.2),
  300: alpha(mainWhite, 0.3),
  400: alpha(mainWhite, 0.4),
  500: alpha(mainWhite, 0.5),
  600: alpha(mainWhite, 0.6),
  700: alpha(mainWhite, 0.7),
  800: alpha(mainWhite, 0.8),
  900: alpha(mainWhite, 0.9),
};

const mainGreyLight = "#121F43";
export const greyLight = {
  50: alpha(mainGreyLight, 0.05),
  100: alpha(mainGreyLight, 0.1),
  200: alpha(mainGreyLight, 0.2),
  300: alpha(mainGreyLight, 0.3),
  400: alpha(mainGreyLight, 0.4),
  500: alpha(mainGreyLight, 0.5),
  600: alpha(mainGreyLight, 0.6),
  700: alpha(mainGreyLight, 0.7),
  800: alpha(mainGreyLight, 0.8),
  900: alpha(mainGreyLight, 0.9),
  main: mainGreyLight,
};

/** Color for dark Theme */
export const mainGreyDark = "#303030";
export const greyDark = {
  main: mainGreyDark,
  900: alpha(mainGreyDark, 0.9),
  800: alpha(mainGreyDark, 0.8),
  700: alpha(mainGreyDark, 0.7),
  600: alpha(mainGreyDark, 0.6),
  500: alpha(mainGreyDark, 0.5),
  400: alpha(mainGreyDark, 0.4),
  300: alpha(mainGreyDark, 0.3),
  200: alpha(mainGreyDark, 0.2),
  100: alpha(mainGreyDark, 0.1),
  50: alpha(mainGreyDark, 0.05),
};
export const success = {
  light: "#198754",
  dark: "#198754",
};
export const warning = {
  light: "#ffc107",
  dark: "#ffc107",
};
export const danger = {
  light: "#dc3545",
  dark: "#dc3545",
};
export const info = {
  light: "#0dcaf0",
  dark: "#0dcaf0",
};
export const inherit = {
  light: "#6c757d",
  dark: "#6c757d",
};

export const blackColor = {
  light: "#1B1B1A",
  dark: "#1B1B1A",
};

export const fancyColorLight = {
  coralRed: "#F44336",
  deepPink: "#E91E63",
  purple: "#9C27B0",
  indigo: "#673AB7",
  blue: "#3F51B5",
  lightBlue: "#2196F3",
  cyan: "#00BCD4",
  green: "#4CAF50",
  orange: "#FF9800",
  yellow: "#FFEB3B",
};

export const fancyColorDark = {
  coralRed: "#C62828",
  deepPink: "#AD1457",
  purple: "#6A1B9A",
  indigo: "#4527A0",
  blue: "#303F9F",
  lightBlue: "#1976D2",
  cyan: "#00838F",
  green: "#388E3C",
  orange: "#EF6C00",
  yellow: "#FBC02D",
};
