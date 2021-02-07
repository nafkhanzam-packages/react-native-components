type Color = string;
type Font = string;

type Theme = {
  colors: {
    primary: {
      main: Color;
      main2: Color;
      light: Color;
      black: Color;
      1: Color;
      2: Color;
      3: Color;
      dark1: Color;
    };
    secondary: {
      1: Color;
      2: Color;
      3: Color;
      dark: Color;
      light: Color;
      logo: Color;
    };
    mainForm: {
      text: Color;
      placeholder: Color;
      label: Color;
      border: Color;
      border1: Color;
      background: Color;
    };
    catering: {
      label: Color;
      gradient: [Color, Color];
    };
    venue: {
      label: Color;
      gradient: [Color, Color];
    };
    grays: {
      1: Color;
      2: Color;
      3: Color;
      4: Color;
      5: Color;
      6: Color;
    };
    text: {
      dark: Color;
      light: Color;
      link: Color;
    };
    background: Color;
    shadow: Color;
    white: Color;
    black: Color;
    onlineGreen: Color;
    dollarGreen: Color;
    ratingYellow: Color;
  };
  fonts: {
    light: Font;
    medium: Font;
    regular: Font;
    thin: Font;
  };
};
