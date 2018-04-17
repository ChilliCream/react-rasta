import PropertyValue from "./PropertyValue";

export default interface BreakpointValues<TValue extends PropertyValue> {
  [key: string]: TValue;
};
