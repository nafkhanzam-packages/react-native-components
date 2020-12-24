import {Text} from "native-base";
import React from "react";
import {StyleProp, TextStyle} from "react-native";
import {CompFC} from "../../types";

export const NormalText: CompFC<{style?: StyleProp<TextStyle>}> = (props) => {
  const {theme: {colors}} = props;

  return (
    <Text
      style={[
        {
          color: colors.darkGrey,
          fontSize: 16,
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};
