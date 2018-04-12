import { BreakpointValue } from "../media";
import { ThemeProperties } from "../theme";

export default interface RowProperties extends ThemeProperties {
  noGutter?: BreakpointValue<boolean>;
}
