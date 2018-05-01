import PropertyValue from "./PropertyValue";

interface BreakpointValues<TValue extends PropertyValue> {
  [key: string]: TValue;
}

export default BreakpointValues;
