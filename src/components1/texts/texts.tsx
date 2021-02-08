import React from "react";
import {Text as RNText, TextStyle} from "react-native";
import {Comp1FC, Theme1} from "..";
import {fontWeights} from "../../utils";

type Props = {
  color?: string;
  center?: boolean;
  bold?: boolean;
};

type TypeProps = TextStyle;

const BaseText: React.FC<{props: Props; typeProps: TypeProps}> = ({props, typeProps, children}) => {
  return (
    <RNText
      style={[
        typeProps,
        {
          color: props.color,
          textAlign: props.center ? "center" : undefined,
          fontWeight: props.bold ? "bold" : undefined,
        },
      ]}
    >
      {children}
    </RNText>
  );
};

type Type =
  | "heading4"
  | "heading5"
  | "heading6"
  | "subtitle1"
  | "body"
  | "caption"
  | "caption2"
  | "placeholder"
  | "subtitle2"
  | "body2"
  | "n20"
  | "n18"
  | "n14"
  | "b14"
  | TypeProps;

export type TextType = Type;

export const Text: Comp1FC<{type: Type} & Props> = (props) => {
  return (
    <BaseText props={props} typeProps={typeMap(props.type, props.comp.theme)}>
      {props.children}
    </BaseText>
  );
};

const typeMap = (type: Type, theme: Theme1): TypeProps => {
  if (typeof type !== "string") {
    return type;
  }
  switch (type) {
    case "heading4":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 28,
        fontWeight: fontWeights.semibold,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0.25,
      };
    case "heading5":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 20,
        fontWeight: fontWeights.semibold,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0,
      };
    case "heading6":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 18,
        fontWeight: fontWeights.semibold,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0.15,
      };
    case "subtitle1":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 14,
        fontWeight: fontWeights.regular,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0.15,
      };
    case "body":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 14,
        fontWeight: fontWeights.regular,
        lineHeight: 22.4,
        letterSpacing: 0,
        marginBottom: 0,
      };
    case "caption":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 12,
        fontWeight: fontWeights.regular,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0.4,
      };
    case "caption2":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 10,
        fontWeight: fontWeights.regular,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 1,
      };
    case "placeholder":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 14,
        fontWeight: fontWeights.light,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0.15,
      };
    case "subtitle2":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 18,
        fontWeight: fontWeights.medium,
        lineHeight: undefined,
        letterSpacing: 0.7,
        marginBottom: 0.1,
      };
    case "body2":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 12,
        fontWeight: fontWeights.regular,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0,
      };
    case "n20":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 18,
        fontWeight: fontWeights.regular,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0,
      };
    case "n18":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        fontWeight: fontWeights.regular,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0,
      };
    case "n14":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 12,
        fontWeight: fontWeights.regular,
        lineHeight: undefined,
        letterSpacing: 0,
        marginBottom: 0,
      };
    case "b14":
      return {
        fontFamily: theme.fonts.regular,
        fontSize: 14,
        fontWeight: fontWeights.bold,
        lineHeight: 16,
        letterSpacing: 0,
        marginBottom: 0,
      };
  }
};
