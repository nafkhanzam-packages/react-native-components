import React from "react";
import RNSpinner, {SpinnerType} from "react-native-spinkit";
import {Comp1FC, Components1, Theme1} from ".";

type Props = {
  comp: Components1;
};

type TypeProps = {size?: number; color?: string; type?: SpinnerType};

const BaseSpinner: React.FC<{props: Props; typeProps: TypeProps}> = ({typeProps}) => {
  return <RNSpinner type={typeProps.type} size={typeProps.size} color={typeProps.color} />;
};

type Type = "fullscreen" | TypeProps;

const typeMap = (type: Type, theme: Theme1): TypeProps => {
  if (typeof type !== "string") {
    return type;
  }
  switch (type) {
    case "fullscreen":
      return {
        type: "Circle",
        color: theme.colors.primary.main,
        size: 28,
      };
  }
};

export const Spinner: Comp1FC<{type?: Type} & Props> = (props) => {
  return (
    <BaseSpinner props={props} typeProps={typeMap(props.type ?? "fullscreen", props.comp.theme)} />
  );
};
