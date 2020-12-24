import {Icon} from "native-base";
import React from "react";
import {TextInput, View} from "react-native";
import {CompFC} from "../../types";

const SearchBar: CompFC<{
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}> = (props) => {
  const {
    placeholder,
    value,
    onChangeText,
    theme: {colors},
  } = props;

  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          elevation: 2,
          borderRadius: 100,
          paddingHorizontal: 12,
          backgroundColor: colors.white,
        }}>
        <Icon
          name="magnify"
          type="MaterialCommunityIcons"
          style={{color: colors.primary, fontSize: 20, marginRight: 12}}
        />
        <TextInput
          style={{flex: 1}}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default SearchBar;
