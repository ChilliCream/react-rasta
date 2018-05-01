import RowAlignContent from "./RowAlignContent";
import RowAlignItems from "./RowAlignItems";
import RowDirection from "./RowDirection";
import RowJustifyContent from "./RowJustifyContent";
import RowWrap from "./RowWrap";
import { BreakpointValue } from "../media";
import { ThemeProperties } from "../theme";

interface RowProperties extends ThemeProperties {
  alignContent?: BreakpointValue<RowAlignContent>;
  alignItems?: BreakpointValue<RowAlignItems>;
  direction?: BreakpointValue<RowDirection>;
  justifyContent?: BreakpointValue<RowJustifyContent>;
  noGutter?: BreakpointValue<boolean>;
  wrap?: BreakpointValue<RowWrap>;
}

export default RowProperties;
