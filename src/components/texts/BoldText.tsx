import {Text} from "native-base";
import React from "react";
import {StyleProp, TextStyle} from "react-native";
import {CompFC} from "../../types";

export const BoldText: CompFC<{style?: StyleProp<TextStyle>}> = (props) => {
  const {
    theme: {colors},
  } = props;

  return (
    <Text style={[{fontWeight: "bold", color: colors.darkGrey}, props.style]}>
      {props.children}
    </Text>
  );
};
