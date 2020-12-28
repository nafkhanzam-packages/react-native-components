import {View} from "native-base";
import React from "react";
import {CompFC} from "../../types";
import {CardTitle} from "../texts/CardTitle";

export const PrimaryCard: CompFC<{title?: string}> = (props) => {
  const {
    theme: {colors},
  } = props;

  return (
    <View
      style={{
        backgroundColor: colors.offWhite,
        borderRadius: 5,
        elevation: 5,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        padding: 20,
      }}>
      {props.title && <CardTitle theme={props.theme}>{props.title}</CardTitle>}
      {props.children}
    </View>
  );
};
