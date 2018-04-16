import RowDirection from "./RowDirection";
import RowJustifyContent from "./RowJustifyContent";
import RowWrap from "./RowWrap";
import { BreakpointValue } from "../media";
import { ThemeProperties } from "../theme";

export default interface RowProperties extends ThemeProperties {
  direction?: BreakpointValue<RowDirection>;
  justifyContent?: BreakpointValue<RowJustifyContent>;
  noGutter?: BreakpointValue<boolean>;
  wrap?: BreakpointValue<RowWrap>;
}
