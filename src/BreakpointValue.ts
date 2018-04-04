import { ContainerProperties } from "./Container";

export type BreakpointValue<TValue extends PropertyValue> =
  | TValue
  | BreakpointValues<TValue>;

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

const defaultContainerWidth: BreakpointValues<number> = {
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140
};

export function _getContainerWidth(
  props?: ContainerProperties
): BreakpointValues<number> {
  return props!.width || props!.theme!.containerWidth || defaultContainerWidth;
}
