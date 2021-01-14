import React from "react";
import {
  ImageSourcePropType,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import RNCarousel, {AdditionalParallaxProps, ParallaxImage} from "react-native-snap-carousel";

type Data = {
  image: ImageSourcePropType;
};

export const Carousel = <T extends Data>(props: {
  datas: T[];
  onPress?: (index: number) => void;
  onSnapToItem?: (index: number) => void;
  width: number;
}) => {
  return (
    <RNCarousel
      sliderWidth={props.width}
      itemWidth={props.width - 40}
      data={props.datas}
      hasParallaxImages
      onSnapToItem={props.onSnapToItem}
      renderItem={(
        {item, index}: {item: T; index: number},
        parallaxProps?: AdditionalParallaxProps,
      ) => {
        return (
          <TouchableWithoutFeedback onPress={() => props.onPress?.(index)}>
            <View>
              <ParallaxImage
                source={item.image}
                dimensions={{
                  width: props.width - 60,
                  height: 150,
                }}
                containerStyle={{
                  flex: 1,
                  marginBottom: Platform.select({ios: 0, android: 1}),
                  backgroundColor: "white",
                  borderRadius: 8,
                }}
                style={{...StyleSheet.absoluteFillObject, resizeMode: "cover"}}
                {...parallaxProps}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      }}
    />
  );
};
