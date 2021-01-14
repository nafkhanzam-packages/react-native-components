import React from "react";
import {View} from "react-native";

export const CenterWrapper: React.FC<{type?: "horizontal-only" | "vertical-only" | "all"}> = (
  props,
) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: props.type === "horizontal-only" ? undefined : "center",
        justifyContent: props.type === "vertical-only" ? undefined : "center",
      }}>
      {props.children}
    </View>
  );
};
