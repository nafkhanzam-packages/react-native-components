import {Components1} from ".";

export const extract = (props: {comp: Components1}) => ({
  comp: props.comp,
  theme: props.comp.theme,
  colors: props.comp.theme.colors,
});
