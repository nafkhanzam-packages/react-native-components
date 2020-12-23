import {Theme} from "../theme";

declare global {
  type CompProps<Props> = {theme: Theme} & Props;
  type CompFC<Props> = React.FC<CompProps<Props>>;
}
