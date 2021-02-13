import {Components1, Theme1} from "../src";

const theme1: Theme1 = {
  colors: {
    primary: {
      main: "#F2613C",
      main2: "#FF8125",
      light: "#FFE9D9",
      black: "#250506",
      1: "#FFBAAB",
      2: "#FF9E89",
      3: "#FF8964",
      dark1: "#57200F",
    },
    secondary: {
      1: "#F68389",
      2: "#FE5E66",
      3: "#EE2B35",
      dark: "#420B0E",
      light: "#D2ECFF",
      logo: "#FCC5BA",
    },
    mainForm: {
      text: "#420B0E",
      placeholder: "#64788A",
      label: "#0A3E6F",
      border: "#2E7ABF",
      border1: "#0D5598",
      background: "#EAF6FF",
    },
    grays: {
      1: "#333333",
      2: "#4F4F4F",
      3: "#828282",
      4: "#BDBDBD",
      5: "#E0E0E0",
      6: "#F2F2F2",
    },
    text: {
      dark: "#000000",
      light: "#FFFFFF",
      link: "#26527A",
    },
    background: "#E5E5E5",
    shadow: "#000000",
    white: "#FFFFFF",
    black: "#000000",
    onlineGreen: "#27AE60",
    dollarGreen: "#219653",
    ratingYellow: "#F2C94C",
  },
  fonts: {
    light: "Roboto-Light",
    medium: "Roboto-Medium",
    regular: "Roboto-Regular",
    thin: "Roboto-Thin",
  },
};

export const comp1 = new Components1(theme1);
