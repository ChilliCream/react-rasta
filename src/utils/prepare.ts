import {
  BreakpointValue,
  BreakpointValues,
  defaultBreakpointKey,
  PropertyValue
} from "../media";
import { Theme } from "../theme";

export default (
  values?: BreakpointValue<PropertyValue>,
  theme?: Theme
): BreakpointValues<PropertyValue> => {
  const defaultKey = defaultBreakpointKey(theme);

  values = values || {};

  if (typeof values !== "object") {
    const newValues = {};

    if (defaultKey != null) {
      newValues[defaultKey] = values;
    }

    values = newValues;
  }

  if (defaultKey != null && values[defaultKey] == null) {
    values[defaultKey] = undefined;
  }

  return values;
};
