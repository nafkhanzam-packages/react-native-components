import React from "react";
import RNSwiper from "react-native-swiper";
import {CompFC, Theme} from ".";

type Props = {
  loop?: boolean;
  showButtons?: boolean;
  autoplay?: boolean;
};

type TypeProps = {
  shadowColor?: string;
  dotColor?: string;
  activeDotColor?: string;
};

const BaseSwiper2: React.FC<{props: Props; typeProps: TypeProps}> = ({
  props,
  typeProps,
  children,
}) => {
  return (
    <RNSwiper
      autoplay={props.autoplay}
      loop={props.loop}
      removeClippedSubviews={false}
      showsButtons={props.showButtons}
      showsPagination={!!typeProps.dotColor}
      dotColor={typeProps.dotColor}
      dotStyle={{width: 8, height: 8}}
      activeDotColor={typeProps.activeDotColor}
      activeDotStyle={{
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.16,
        shadowRadius: 10,
        shadowColor: typeProps.shadowColor,
      }}
    >
      {React.Children.toArray(children)}
    </RNSwiper>
  );
};

type Type = "main" | "no-dots";

const typeMap = (type: Type, theme: Theme): TypeProps => {
  switch (type) {
    case "main":
      return {
        dotColor: theme.colors.secondary[1],
        activeDotColor: theme.colors.secondary[3],
      };
    case "no-dots":
      return {};
  }
};

export const Swiper: CompFC<{type?: Type} & Props> = (props) => {
  return (
    <BaseSwiper2 props={props} typeProps={typeMap(props.type ?? "main", props.comp.theme)}>
      {props.children}
    </BaseSwiper2>
  );
};
