import BreakpointValue from "./BreakpointValue";
import PropertyValue from "./PropertyValue";

interface PropertyValuesMap {
  [key: string]: BreakpointValue<PropertyValue>;
}

export default PropertyValuesMap;
