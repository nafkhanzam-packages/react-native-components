import React, {ElementType, useCallback, useEffect, useRef, useState} from "react";
import {Image, ImageBackground, ImageProps, TouchableOpacity} from "react-native";

const resolveAssetSource = Image.resolveAssetSource;

type IOnSizeParams = {
  width: number;
  height: number;
};

type PropsType = ImageProps & {
  height?: number;
  width?: number;
  background?: boolean;
  onPress?: () => void;
  onSize?: (onSizeParams: IOnSizeParams) => void;
};

export const ScalableImage: React.FC<PropsType> = (props) => {
  const ImageComponent: ElementType = props.background ? ImageBackground : Image;

  const [scalableWidth, setScalableWidth] = useState<number>(0);
  const [scalableHeight, setScalableHeight] = useState<number>(0);
  const [image, setImage] = useState(<ImageComponent />);
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  const adjustSize = useCallback(
    (sourceWidth: number, sourceHeight: number) => {
      const {width, height} = props;

      let ratio = 1;

      if (width && height) {
        ratio = Math.min(width / sourceWidth, height / sourceHeight);
      } else if (width) {
        ratio = width / sourceWidth;
      } else if (height) {
        ratio = height / sourceHeight;
      }

      if (mounted.current) {
        const computedWidth = sourceWidth * ratio;
        const computedHeight = sourceHeight * ratio;

        setScalableWidth(computedWidth);
        setScalableHeight(computedHeight);

        props.onSize?.({width: computedWidth, height: computedHeight});
      }
    },
    [props, mounted],
  );

  useEffect(() => {
    const {source} = props;
    const uri = typeof source !== "number" && (Array.isArray(source) ? source[0] : source).uri;
    if (uri) {
      Image.getSize(
        uri,
        (width, height) => adjustSize(width, height),
        (err) => console.warn(err),
      );
    } else {
      const sourceToUse = resolveAssetSource(source);
      adjustSize(sourceToUse.width, sourceToUse.height);
    }
  }, [props, adjustSize]);

  useEffect(() => {
    setImage(
      <ImageComponent
        {...props}
        style={[
          props.style,
          {
            width: scalableWidth,
            height: scalableHeight,
          },
        ]}
      />,
    );
  }, [ImageComponent, props, scalableHeight, scalableWidth]);

  if (!props.onPress) {
    return image;
  } else {
    return <TouchableOpacity onPress={props.onPress}>{image}</TouchableOpacity>;
  }
};
