import {Theme} from "./theme";

export type CompProps<Props> = {theme: Theme} & Props;
export type CompFC<Props> = React.FC<CompProps<Props>>;
