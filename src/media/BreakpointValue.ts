import BreakpointValues from "./BreakpointValues";
import PropertyValue from "./PropertyValue";

type BreakpointValue<TValue extends PropertyValue> =
  | TValue
  | BreakpointValues<TValue>;

export default BreakpointValue;
