// if you use expo remove this line
import {withKnobs} from "@storybook/addon-knobs";
import {addDecorator, configure, getStorybookUI} from "@storybook/react-native";
import "./rn-addons";

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require("./stories");
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI({asyncStorage: null});

export default StorybookUI;
