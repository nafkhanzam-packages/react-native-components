import React from "react";
import {Image} from "react-native";

export const CoverImage: React.FC<Image["props"]> = (props) => {
  const {style, ...restProps} = props;
  return (
    <Image
      style={[
        {
          flex: 1,
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        },
        style,
      ]}
      {...restProps}
    />
  );
};
