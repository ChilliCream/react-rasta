import BreakpointMap from "../BreakpointMap";
import { BreakpointValues } from "../BreakpointValue";

export default interface Theme {
  breakpoints?: BreakpointMap;
  containerWidth?: BreakpointValues<number>;
  gutterWidth?: number;
}
