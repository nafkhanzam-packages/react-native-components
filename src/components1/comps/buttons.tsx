import {extract1} from "../utils";
import React from "react";
import {TouchableOpacity} from "react-native";
import {Comp1FC, Components1, Theme1} from "..";
import {TextType} from "./texts";

type Props = {
  onPress?: () => void;
  comp: Components1;
};

type TypeProps = {
  color?: string;
  borderColor?: string;
  disabled?: boolean;
  shadowColor?: string;
  textColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  height?: number;
};

const BaseButton: React.FC<{props: Props; typeProps: TypeProps}> = ({
  props,
  typeProps,
  children,
}) => {
  const {comp} = extract1(props);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: typeProps.color,
        borderColor: typeProps.borderColor,
        borderWidth: typeProps.borderColor ? 2 : 0,
        borderRadius: 10,
        height: typeProps.height ?? 48,
        justifyContent: "center",
        paddingHorizontal: typeProps.paddingHorizontal ?? 16,
        paddingVertical: typeProps.paddingVertical ?? 0,
        elevation: typeProps.shadowColor ? 2 : undefined,
        shadowColor: typeProps.shadowColor,
        shadowOffset: typeProps.shadowColor ? {height: 6, width: 3} : undefined,
        shadowOpacity: typeProps.shadowColor ? 0.16 : undefined,
        shadowRadius: typeProps.shadowColor ? 10 : undefined,
      }}
    >
      <comp.CenterWrapper type="all">{children}</comp.CenterWrapper>
    </TouchableOpacity>
  );
};

type Type = "primary" | "secondary" | "disabled" | TypeProps;

const typeMap = (type: Type, theme: Theme1): TypeProps => {
  if (typeof type !== "string") {
    return type;
  }
  switch (type) {
    case "primary":
      return {
        color: theme.colors.primary[2],
        textColor: theme.colors.text.light,
        shadowColor: theme.colors.shadow,
      };
    case "secondary":
      return {
        color: theme.colors.secondary[2],
        textColor: theme.colors.text.light,
        shadowColor: theme.colors.shadow,
      };
    case "disabled":
      return {
        color: theme.colors.grays[5],
        textColor: theme.colors.text.light,
        shadowColor: theme.colors.shadow,
      };
  }
};

export const Button: Comp1FC<{type?: Type} & Props> = (props) => {
  const {comp} = extract1(props);
  return (
    <BaseButton props={props} typeProps={typeMap(props.type ?? "primary", comp.theme)}>
      {props.children}
    </BaseButton>
  );
};

export const TextButton: Comp1FC<{type?: Type; textType?: TextType} & Props> = (props) => {
  const {comp} = extract1(props);
  const typeProps = typeMap(props.type ?? "primary", comp.theme);

  return (
    <BaseButton props={props} typeProps={typeProps}>
      <comp.Text type={props.textType ?? "n20"} color={typeProps.textColor} center>
        {props.children}
      </comp.Text>
    </BaseButton>
  );
};

export const LinkButton: Comp1FC<{textType?: TextType} & Props> = (props) => {
  const {comp, colors} = extract1(props);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <comp.Text type={props.textType ?? "n20"} color={colors.text.link} underlined>
        {props.children}
      </comp.Text>
    </TouchableOpacity>
  );
};
