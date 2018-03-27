export type AllowedValues = boolean | number | string;

export type BreakpointValue<TValue extends AllowedValues> = TValue | BreakpointValues<TValue>;

export interface BreakpointValues<TValue extends AllowedValues> {
  [key: string]: TValue;
}

export interface BreakpointValuesMap {
  [propKey: string]: BreakpointValues<AllowedValues>;
}

export interface BreakpointValueMap {
  [key: string]: PropertyValues;
}

export interface PropertyValues {
  [propKey: string]: AllowedValues;
}