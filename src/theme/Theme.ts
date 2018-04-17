import { BreakpointMap, BreakpointValues } from "../media";

export default interface Theme {
  breakpoints?: BreakpointMap;
  containerWidth?: BreakpointValues<number>;
  gutterWidth?: number;
};
