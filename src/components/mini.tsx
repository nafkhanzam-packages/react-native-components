import {extract} from "./utils";
import React from "react";
import {View} from "react-native";
import {CompFC} from ".";

export const ChatButton: CompFC<{}> = (props) => {
  const {comp, colors} = extract(props);

  return (
    <View
      style={{
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.black,
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 6,
      }}
    >
      <comp.icons.MaterialIcons name="fiber-manual-record" size={18} color={colors.onlineGreen} />
      <comp.BS width={4} />
      <comp.Text type="subtitle1" bold>
        Chat
      </comp.Text>
    </View>
  );
};

export const InfoCircle: CompFC<{}> = (props) => {
  const {comp, colors} = extract(props);

  return (
    <View
      style={{
        backgroundColor: "red",
        borderRadius: 99,
        padding: 2,
      }}
    >
      <View
        style={{
          paddingHorizontal: 12,
          borderColor: colors.white,
          borderWidth: 1,
          borderRadius: 99,
          backgroundColor: "transparent",
        }}
      >
        <comp.Text color={colors.text.light} type="heading5">
          i
        </comp.Text>
      </View>
    </View>
  );
};

export const Rating: CompFC<{rating: number}> = (props) => {
  const {comp, colors} = extract(props);

  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <comp.icons.MaterialIcons name="star" size={22} style={{color: colors.ratingYellow}} />
      <comp.Text type="caption">{props.rating}</comp.Text>
    </View>
  );
};

export const Distance: CompFC<{distance: number; unit: string}> = (props) => {
  const {comp, colors} = extract(props);

  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <comp.icons.MaterialIcons name="location-on" size={18} style={{color: colors.black}} />
      <comp.Text type="caption">
        {props.distance} {props.unit}
      </comp.Text>
    </View>
  );
};

export const CrowdQuantity: CompFC<{quantity: number}> = (props) => {
  const {comp, colors} = extract(props);

  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <comp.icons.MaterialIcons name="groups" size={16} style={{color: colors.black}} />
      <comp.BS width={4} />
      <comp.Text type="caption">{props.quantity}</comp.Text>
    </View>
  );
};

export const DollarPricing: CompFC<{count: number}> = (props) => {
  const {comp, colors} = extract(props);

  return (
    <comp.Text type="caption" color={colors.dollarGreen}>
      {"$".repeat(props.count)}
    </comp.Text>
  );
};
