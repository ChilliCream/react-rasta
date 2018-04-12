import BreakpointValues from "./BreakpointValues";
import PropertyValue from "./PropertyValue";

export default interface PropertyValuesMap {
  [key: string]: BreakpointValues<PropertyValue>;
}
