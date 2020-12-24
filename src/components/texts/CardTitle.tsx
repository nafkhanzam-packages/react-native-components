import React from "react";
import {View} from "react-native";
import {CompFC} from "../../types";
import {BoldText} from "./BoldText";

export const CardTitle: CompFC<{}> = (props) => {
  const {
    theme: {colors},
  } = props;

  return (
    <>
      <BoldText theme={props.theme} style={{fontSize: 18}}>
        {props.children}
      </BoldText>
      <View
        style={{
          width: 40,
          height: 2,
          backgroundColor: colors.primary,
          marginTop: 4,
        }}
      />
    </>
  );
};
