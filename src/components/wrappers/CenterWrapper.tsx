import {View} from "native-base";
import React from "react";

export const CenterWrapper: CompFC<{horizontalOnly?: boolean}> = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: props.horizontalOnly ? undefined : "center",
        justifyContent: "center",
      }}>
      {props.children}
    </View>
  );
};
