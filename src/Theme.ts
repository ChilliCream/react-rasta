import BreakpointMap from "./BreakpointMap";

export interface Theme {
  breakpoints?: BreakpointMap;
  gutterWidth?: number;
}

export default interface ThemeProperties {
  theme?: Theme;
}
