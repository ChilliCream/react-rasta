import { BreakpointMap, BreakpointValues } from "../media";

interface Theme {
  breakpoints?: BreakpointMap;
  containerWidth?: BreakpointValues<number>;
  gutterWidth?: number;
}

export default Theme;
