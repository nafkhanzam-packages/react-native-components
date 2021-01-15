import React from "react";
import {ImageBackground, ImageSourcePropType} from "react-native";

export const CoverBackground: React.FC<{
  source: ImageSourcePropType;
}> = (props) => {
  return (
    <ImageBackground
      source={props.source}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
      }}>
      {props.children}
    </ImageBackground>
  );
};
