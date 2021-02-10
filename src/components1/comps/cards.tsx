import React from "react";
import {View} from "react-native";
import {Comp1FC, Theme1} from "..";

type Props = {
  onPress?: () => void;
  color?: string;
  noShadow?: boolean;
  paddingHorizontal?: number;
  overflowHidden?: boolean;
};

type TypeProps = {
  color?: string;
  shadowColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  elevation?: number;
};

const BaseCard: React.FC<{props: Props; typeProps: TypeProps}> = ({props, typeProps, children}) => {
  return (
    <View
      style={{
        backgroundColor: props.color ?? typeProps.color,
        paddingHorizontal: props.paddingHorizontal,
        borderRadius: typeProps.borderRadius ?? 10,
        shadowColor: !props.noShadow ? typeProps.shadowColor : undefined,
        shadowOffset: typeProps.shadowColor && !props.noShadow ? {height: 6, width: 3} : undefined,
        shadowOpacity: typeProps.shadowColor && !props.noShadow ? 0.16 : undefined,
        shadowRadius: typeProps.shadowColor && !props.noShadow ? 10 : undefined,
        borderWidth: typeProps.borderWidth,
        borderColor: typeProps.borderColor,
        elevation: !props.noShadow ? typeProps.elevation : undefined,
        overflow: props.overflowHidden ? "hidden" : undefined,
      }}
    >
      {children}
    </View>
  );
};

type Type = "main" | "rounder" | TypeProps;

const typeMap = (type: Type, theme: Theme1): TypeProps => {
  if (typeof type !== "string") {
    return type;
  }
  switch (type) {
    case "main":
      return {
        color: theme.colors.white,
        shadowColor: theme.colors.shadow,
        elevation: 2,
        borderRadius: 10,
      };
    case "rounder":
      return {
        color: theme.colors.white,
        shadowColor: theme.colors.shadow,
        elevation: 2,
        borderRadius: 20,
      };
  }
};

export const Card: Comp1FC<{type: Type} & Props> = (props) => {
  return (
    <BaseCard props={props} typeProps={typeMap(props.type ?? "main", props.comp.theme)}>
      {props.children}
    </BaseCard>
  );
};
