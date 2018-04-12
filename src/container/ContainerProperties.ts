import { BreakpointValues } from "../media";
import { ThemeProperties } from "../theme";

export default interface ContainerProperties extends ThemeProperties {
  fluid?: boolean;
  width?: BreakpointValues<number>;
}
