import {TextStyle} from "react-native";
import {Components} from ".";

export const extract = (props: {comp: Components}) => ({
  comp: props.comp,
  theme: props.comp.theme,
  colors: props.comp.theme.colors,
});

export const fontWeights = {
  thin: "100" as TextStyle["fontWeight"],
  ultraLight: "200" as TextStyle["fontWeight"],
  light: "300" as TextStyle["fontWeight"],
  regular: "400" as TextStyle["fontWeight"],
  medium: "500" as TextStyle["fontWeight"],
  semibold: "600" as TextStyle["fontWeight"],
  bold: "700" as TextStyle["fontWeight"],
  heavy: "800" as TextStyle["fontWeight"],
  black: "900" as TextStyle["fontWeight"],
};
