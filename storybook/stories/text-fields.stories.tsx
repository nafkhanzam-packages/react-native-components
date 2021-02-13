import {storiesOf} from "@storybook/react-native";
import React from "react";
import {View} from "react-native";
import {comp1} from "../component";

storiesOf("TextField", module).add("all", () => (
  <comp1.ScreenWrapper noScroll>
    <comp1.CenterWrapper type="vertical-only">
      <View style={{padding: 10}}>
        <comp1.TextField label="Label" value="" setValue={() => {}} />
        <comp1.BS height={32} />
        <comp1.TextField type="search" label="Label" value="" setValue={() => {}} />
        <comp1.BS height={32} />
        <comp1.DateTextField
          label="Label"
          date={{date: 0, month: 0, year: 1000}}
          setDate={() => {}}
        />
      </View>
    </comp1.CenterWrapper>
  </comp1.ScreenWrapper>
));
