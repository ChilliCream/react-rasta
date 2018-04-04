import BreakpointMap from "./BreakpointMap";
import { BreakpointValues } from "./BreakpointValue";

export interface Theme {
  breakpoints?: BreakpointMap;
  containerWidth?: BreakpointValues<number>;
  gutterWidth?: number;
}

export default interface ThemeProperties {
  theme?: Theme;
}
