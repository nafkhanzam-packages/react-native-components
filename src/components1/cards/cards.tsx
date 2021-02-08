import React from "react";
import {View} from "react-native";
import {Comp1FC, Theme1} from "..";

type Props = {
  onPress?: () => void;
  color?: string;
  noShadow?: boolean;
};

type TypeProps = {
  color?: string;
  shadowColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  padding?: number;
  elevation?: number;
};

const BaseCard: React.FC<{props: Props; typeProps: TypeProps}> = ({props, typeProps, children}) => {
  return (
    <View
      style={{
        backgroundColor: props.color ?? typeProps.color,
        borderRadius: typeProps.borderRadius ?? 10,
        padding: typeProps.padding ?? 12,
        shadowColor: !props.noShadow ? typeProps.shadowColor : undefined,
        shadowOffset: typeProps.shadowColor && !props.noShadow ? {height: 6, width: 3} : undefined,
        shadowOpacity: typeProps.shadowColor && !props.noShadow ? 0.16 : undefined,
        shadowRadius: typeProps.shadowColor && !props.noShadow ? 10 : undefined,
        borderWidth: typeProps.borderWidth,
        borderColor: typeProps.borderColor,
        elevation: !props.noShadow ? typeProps.elevation : undefined,
      }}
    >
      {children}
    </View>
  );
};

type Type = "main" | "option" | "catering" | "category";

const typeMap = (type: Type, theme: Theme1): TypeProps => {
  switch (type) {
    case "main":
      return {
        color: theme.colors.white,
        shadowColor: theme.colors.shadow,
        elevation: 2,
        borderRadius: 20,
      };
    case "option":
      return {
        color: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.black,
      };
    case "catering":
      return {
        color: theme.colors.primary.light,
        borderWidth: 1,
        borderColor: theme.colors.black,
      };
    case "category":
      return {
        color: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.mainForm.border1,
        padding: 0,
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
