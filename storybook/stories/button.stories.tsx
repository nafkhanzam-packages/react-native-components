import {action} from "@storybook/addon-actions";
import {text} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react-native";
import React from "react";
import {comp1} from "../component";

storiesOf("Button", module).add("all", () => (
  <comp1.CenterWrapper type="all">
    <comp1.TextButton type="primary" onPress={action("clicked-text")}>
      {text("Button text", "Hello Button")}
    </comp1.TextButton>
    <comp1.BS height={4} />
    <comp1.TextButton type="secondary" onPress={action("clicked-text")}>
      {text("Button text", "Hello Button")}
    </comp1.TextButton>
    <comp1.BS height={4} />
    <comp1.TextButton type="disabled" onPress={action("clicked-text")}>
      {text("Button text", "Hello Button")}
    </comp1.TextButton>
    <comp1.BS height={4} />
  </comp1.CenterWrapper>
));
