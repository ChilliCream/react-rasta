export type BreakpointValue<TValue extends PropertyValue> = TValue | BreakpointValues<TValue>;

export interface BreakpointValues<TValue extends PropertyValue> {
  [key: string]: TValue;
}

export interface BreakpointValuesMap {
  [key: string]: PropertyValues;
}

export type PropertyValue = boolean | number | string;

export interface PropertyValuesMap {
  [key: string]: BreakpointValues<PropertyValue>;
}

export interface PropertyValues {
  [key: string]: PropertyValue;
}