import React from "react";
import RNSpinner, {SpinnerType} from "react-native-spinkit";
import {CompFC, Components, Theme} from ".";

type Props = {
  comp: Components;
};

type TypeProps = {size?: number; color?: string; type?: SpinnerType};

const BaseSpinner: React.FC<{props: Props; typeProps: TypeProps}> = ({typeProps}) => {
  return <RNSpinner type={typeProps.type} size={typeProps.size} color={typeProps.color} />;
};

type Type = "fullscreen";

const typeMap = (type: Type, theme: Theme): TypeProps => {
  switch (type) {
    case "fullscreen":
      return {
        type: "Circle",
        color: theme.colors.primary.main,
        size: 28,
      };
  }
};

export const Spinner: CompFC<{type?: Type} & Props> = (props) => {
  return (
    <BaseSpinner props={props} typeProps={typeMap(props.type ?? "fullscreen", props.comp.theme)} />
  );
};
