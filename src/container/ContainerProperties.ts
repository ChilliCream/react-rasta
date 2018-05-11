import {BreakpointValues} from "../media";
import {ThemeProperties} from "../theme";

interface ContainerProperties extends ThemeProperties {
  fluid?: boolean;
  fullscreen?: boolean;
  width?: BreakpointValues<number>;
}

export default ContainerProperties;
