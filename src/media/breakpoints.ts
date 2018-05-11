import {Theme} from "../theme";
import BreakpointMap from "./BreakpointMap";
import defaultBreakpoints from "./defaultBreakpoints";

export default (theme?: Theme): BreakpointMap => {
  return (theme && theme!.breakpoints) || defaultBreakpoints;
};
