import RowDirection from "./RowDirection";
import { BreakpointValue } from "../media";
import { ThemeProperties } from "../theme";

export default interface RowProperties extends ThemeProperties {
  direction?: BreakpointValue<RowDirection>;
  noGutter?: BreakpointValue<boolean>;
}
