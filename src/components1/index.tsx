import React, {ReactElement} from "react";
import {Button, LinkButton, TextButton} from "./comps/buttons";
import {Card} from "./comps/cards";
import {DateTextField, TextField} from "./comps/text-fields";
import {LoadingOverlay} from "./comps/loading-overlays";
import {Spinner} from "./comps/spinners";
import {Swiper} from "./comps/swipers";
import {Text} from "./comps/texts";
import {ChatButton, CrowdQuantity, Distance, DollarPricing, InfoCircle, Rating} from "./comps/mini";
import {EssentialComponents} from "../common";
import {FetchFlatList, FetchFlatListProps} from "../common/FetchFlatList";

type Color = string;
type Font = string;

export type Theme1 = {
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

export type Comp1FC<Props> = React.FC<{comp: Components1} & Props>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Class1FC<FC extends Comp1FC<any>> = React.FC<Omit<Parameters<FC>[0], "theme" | "comp">>;
export class Components1 extends EssentialComponents {
  constructor(
    public theme: Theme1,
    public comps: {
      error: (err: unknown) => ReactElement;
      empty: ReactElement;
      loading: ReactElement;
    } = {
      empty: <></>,
      // eslint-disable-next-line react/display-name
      error: () => <></>,
      loading: <></>,
    },
  ) {
    super();
  }

  FFList = <T,>(props: Omit<FetchFlatListProps<T>, "components">) => (
    <FetchFlatList<T> components={this.comps} {...props} />
  );

  Button: Class1FC<typeof Button> = (props) => <Button comp={this} {...props} />;
  TextButton: Class1FC<typeof TextButton> = (props) => <TextButton comp={this} {...props} />;
  LinkButton: Class1FC<typeof LinkButton> = (props) => <LinkButton comp={this} {...props} />;

  Card: Class1FC<typeof Card> = (props) => <Card comp={this} {...props} />;

  LoadingOverlay: Class1FC<typeof LoadingOverlay> = (props) => (
    <LoadingOverlay comp={this} {...props} />
  );

  TextField: Class1FC<typeof TextField> = (props) => <TextField comp={this} {...props} />;
  DateTextField: Class1FC<typeof DateTextField> = (props) => (
    <DateTextField comp={this} {...props} />
  );
  Text: Class1FC<typeof Text> = (props) => <Text comp={this} {...props} />;

  Spinner: Class1FC<typeof Spinner> = (props) => <Spinner comp={this} {...props} />;
  Swiper: Class1FC<typeof Swiper> = (props) => <Swiper comp={this} {...props} />;

  ChatButton: Class1FC<typeof ChatButton> = (props) => <ChatButton comp={this} {...props} />;
  InfoCircle: Class1FC<typeof InfoCircle> = (props) => <InfoCircle comp={this} {...props} />;
  Rating: Class1FC<typeof Rating> = (props) => <Rating comp={this} {...props} />;
  Distance: Class1FC<typeof Distance> = (props) => <Distance comp={this} {...props} />;
  CrowdQuantity: Class1FC<typeof CrowdQuantity> = (props) => (
    <CrowdQuantity comp={this} {...props} />
  );
  DollarPricing: Class1FC<typeof DollarPricing> = (props) => (
    <DollarPricing comp={this} {...props} />
  );
}
