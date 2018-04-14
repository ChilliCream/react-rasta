import BreakpointMap from "./BreakpointMap";
import defaultBreakpoints from "./defaultBreakpoints";
import { Theme } from "../theme";

export default (theme?: Theme): BreakpointMap => {
  return (theme && theme!.breakpoints) || defaultBreakpoints;
};
