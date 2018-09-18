import {Theme} from "../theme";
import BreakpointMap from "./BreakpointMap";
import defaultBreakpoints from "./defaultBreakpoints";

export default (theme?: Theme) =>
  (theme && theme.breakpoints) || defaultBreakpoints;
