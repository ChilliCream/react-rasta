import ColumnAlignSelf from "./ColumnAlignSelf";
import ColumnOffset from "./ColumnOffset";
import ColumnOrder from "./ColumnOrder";
import ColumnSize from "./ColumnSize";
import { BreakpointValue } from "../media";
import { ThemeProperties } from "../theme";

export default interface ColumnProperties extends ThemeProperties {
  alignSelf?: BreakpointValue<ColumnAlignSelf>;
  offset?: BreakpointValue<ColumnOffset>;
  order?: BreakpointValue<ColumnOrder>;
  size?: BreakpointValue<ColumnSize>;
};
