import React, {ReactElement} from "react";
import {Button, LinkButton, TextButton} from "./buttons/buttons";
import {Card} from "./cards/cards";
import {DateTextField, TextField} from "./inputs/text-fields";
import {LoadingOverlay} from "./screens/loading-overlays";
import {Spinner} from "./spinners";
import {Swiper} from "./swipers";
import {Text} from "./texts/texts";
import LinearGradient from "react-native-linear-gradient";
import {ChatButton, CrowdQuantity, Distance, DollarPricing, InfoCircle, Rating} from "./mini";
import Modal from "react-native-modal";
import CheckBox from "@react-native-community/checkbox";
import ImageView from "react-native-image-viewing";
import {FlatList} from "react-native";
import {EssentialComponents} from "../common";
import {FetchFlatList, FetchFlatListProps} from "../common/FetchFlatList";

type Color = string;
type Font = string;

export type Theme = {
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

export type CompFC<Props> = React.FC<{comp: Components} & Props>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassFC<FC extends CompFC<any>> = React.FC<Omit<Parameters<FC>[0], "theme" | "comp">>;
export class Components extends EssentialComponents {
  constructor(
    public theme: Theme,
    public comps: {
      error: (err: unknown) => ReactElement;
      empty: ReactElement;
      loading: ReactElement;
    },
  ) {
    super();
  }

  FFList = <T,>(props: Omit<FetchFlatListProps<T>, "components">) => (
    <FetchFlatList<T> components={this.comps} {...props} />
  );

  FList = FlatList;
  LinearGradient = LinearGradient;
  Modal = Modal;
  CheckBox = CheckBox;
  ImageView = ImageView;

  Button: ClassFC<typeof Button> = (props) => <Button comp={this} {...props} />;
  TextButton: ClassFC<typeof TextButton> = (props) => <TextButton comp={this} {...props} />;
  LinkButton: ClassFC<typeof LinkButton> = (props) => <LinkButton comp={this} {...props} />;

  Card: ClassFC<typeof Card> = (props) => <Card comp={this} {...props} />;

  LoadingOverlay: ClassFC<typeof LoadingOverlay> = (props) => (
    <LoadingOverlay comp={this} {...props} />
  );

  TextField: ClassFC<typeof TextField> = (props) => <TextField comp={this} {...props} />;
  DateTextField: ClassFC<typeof DateTextField> = (props) => (
    <DateTextField comp={this} {...props} />
  );
  Text: ClassFC<typeof Text> = (props) => <Text comp={this} {...props} />;

  Spinner: ClassFC<typeof Spinner> = (props) => <Spinner comp={this} {...props} />;
  Swiper: ClassFC<typeof Swiper> = (props) => <Swiper comp={this} {...props} />;

  ChatButton: ClassFC<typeof ChatButton> = (props) => <ChatButton comp={this} {...props} />;
  InfoCircle: ClassFC<typeof InfoCircle> = (props) => <InfoCircle comp={this} {...props} />;
  Rating: ClassFC<typeof Rating> = (props) => <Rating comp={this} {...props} />;
  Distance: ClassFC<typeof Distance> = (props) => <Distance comp={this} {...props} />;
  CrowdQuantity: ClassFC<typeof CrowdQuantity> = (props) => (
    <CrowdQuantity comp={this} {...props} />
  );
  DollarPricing: ClassFC<typeof DollarPricing> = (props) => (
    <DollarPricing comp={this} {...props} />
  );
}
