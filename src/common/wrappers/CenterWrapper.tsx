import React from "react";
import {View} from "react-native";

export const CenterWrapper: React.FC<{type?: "horizontal-only" | "vertical-only" | "all"}> = (
  props,
) => {
  return (
    <View
      style={{
        // flex: 1,
        // width: props.type === "vertical-only" ? undefined : "100%",
        alignItems: props.type === "vertical-only" ? undefined : "center",
        // height: props.type === "horizontal-only" ? undefined : "100%",
        justifyContent: props.type === "horizontal-only" ? undefined : "center",
      }}>
      {props.children}
    </View>
  );
};
