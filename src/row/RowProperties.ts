import RowDirection from "./RowDirection";
import RowWrap from "./RowWrap";
import { BreakpointValue } from "../media";
import { ThemeProperties } from "../theme";

export default interface RowProperties extends ThemeProperties {
  direction?: BreakpointValue<RowDirection>;
  noGutter?: BreakpointValue<boolean>;
  wrap?: BreakpointValue<RowWrap>;
}
