import ColumnAlignSelf from "./ColumnAlignSelf";
import ColumnFlex from "./ColumnFlex";
import ColumnOffset from "./ColumnOffset";
import ColumnOrder from "./ColumnOrder";
import ColumnSize from "./ColumnSize";
import { BreakpointValue } from "../media";
import { ThemeProperties } from "../theme";

interface ColumnProperties extends ThemeProperties {
  alignSelf?: BreakpointValue<ColumnAlignSelf>;
  flex?: BreakpointValue<ColumnFlex>;
  offset?: BreakpointValue<ColumnOffset>;
  order?: BreakpointValue<ColumnOrder>;
  size?: BreakpointValue<ColumnSize>;
}

export default ColumnProperties;
