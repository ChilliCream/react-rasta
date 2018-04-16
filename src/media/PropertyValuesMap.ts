import BreakpointValue from "./BreakpointValue";
import PropertyValue from "./PropertyValue";

export default interface PropertyValuesMap {
  [key: string]: BreakpointValue<PropertyValue>;
}
