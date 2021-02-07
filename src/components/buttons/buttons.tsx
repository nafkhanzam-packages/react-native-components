import {extract} from "../utils";
import React from "react";
import {TouchableOpacity} from "react-native";
import {CompFC, Components} from "..";
import {TextType} from "../texts/texts";

type Props = {
  onPress?: () => void;
  comp: Components;
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
  const {comp} = extract(props);
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
        paddingHorizontal: typeProps.paddingHorizontal ?? 15,
        paddingVertical: typeProps.paddingVertical ?? 15,
        elevation: typeProps.shadowColor ? 2 : undefined,
        shadowColor: typeProps.shadowColor,
        shadowOffset: typeProps.shadowColor ? {height: 6, width: 3} : undefined,
        shadowOpacity: typeProps.shadowColor ? 0.16 : undefined,
        shadowRadius: typeProps.shadowColor ? 10 : undefined,
      }}
    >
      <comp.CenterWrapper>{children}</comp.CenterWrapper>
    </TouchableOpacity>
  );
};

type Type = "primary" | "secondary";

const typeMap = (type: Type, theme: Theme): TypeProps => {
  switch (type) {
    case "primary":
      return {
        color: theme.colors.secondary[2],
        textColor: theme.colors.text.light,
        shadowColor: theme.colors.shadow,
      };
    case "secondary":
      return {
        color: theme.colors.grays[5],
        textColor: theme.colors.text.light,
        shadowColor: theme.colors.shadow,
      };
  }
};

export const Button: CompFC<{type?: Type} & Props> = (props) => {
  const {comp} = extract(props);
  return (
    <BaseButton props={props} typeProps={typeMap(props.type ?? "primary", comp.theme)}>
      {props.children}
    </BaseButton>
  );
};

export const TextButton: CompFC<{type?: Type; textType?: TextType} & Props> = (props) => {
  const {comp} = extract(props);
  const typeProps = typeMap(props.type ?? "primary", comp.theme);

  return (
    <BaseButton props={props} typeProps={typeProps}>
      <comp.Text type={props.textType ?? "n20"} color={typeProps.textColor} center>
        {props.children}
      </comp.Text>
    </BaseButton>
  );
};

export const LinkButton: CompFC<{textType?: TextType} & Props> = (props) => {
  const {comp, colors} = extract(props);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <comp.Text type={props.textType ?? "n20"} color={colors.text.link}>
        {props.children}
      </comp.Text>
    </TouchableOpacity>
  );
};
