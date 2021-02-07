import RNLoadingOverlay from "react-native-loading-spinner-overlay";
import React from "react";
import {TextStyle} from "react-native";
import {CompFC, Theme} from "..";

type Props = {
  visible?: boolean;
  text?: string;
  cancelable?: boolean;
};

type TypeProps = {textStyle?: {weight?: TextStyle["fontWeight"]; color?: string; size?: number}};

const BaseLoadingOverlay: React.FC<{props: Props; typeProps: TypeProps}> = ({props, typeProps}) => {
  return (
    <RNLoadingOverlay
      animation="fade"
      visible={props.visible}
      textContent={props.text}
      cancelable={props.cancelable ?? false}
      textStyle={{
        fontWeight: typeProps.textStyle?.weight,
        color: typeProps.textStyle?.color,
        fontSize: typeProps.textStyle?.size,
      }}
    />
  );
};

type Type = "main";

const typeMap = (type: Type, theme: Theme): TypeProps => {
  switch (type) {
    case "main":
      return {
        textStyle: {
          color: theme.colors.background,
        },
      };
  }
};

export const LoadingOverlay: CompFC<{type?: Type} & Props> = (props) => {
  return (
    <BaseLoadingOverlay props={props} typeProps={typeMap(props.type ?? "main", props.comp.theme)} />
  );
};
