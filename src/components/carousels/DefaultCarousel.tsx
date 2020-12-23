import React from "react";
import {
  Dimensions,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Carousel, {AdditionalParallaxProps, ParallaxImage} from "react-native-snap-carousel";

const {width: viewportWidth} = Dimensions.get("window");

type Data = {
  image: ImageSourcePropType;
};

export const DefaultCarousel = <T extends Data>(props: {
  datas: T[];
  onPress?: (data: T) => void;
  onSnapToItem?: (index: number) => void;
}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Carousel
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 40}
        data={props.datas}
        hasParallaxImages={true}
        onSnapToItem={props.onSnapToItem}
        // ! Hacky solution
        // TODO [low prio] find solution!
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        renderItem={({item}: {item: T}, parallaxProps: AdditionalParallaxProps) => {
          return (
            <TouchableWithoutFeedback onPress={() => props.onPress?.(item)}>
              <View>
                <ParallaxImage
                  source={item.image}
                  dimensions={{
                    width: viewportWidth - 60,
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
    </View>
  );
};
