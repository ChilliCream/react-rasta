import {
  BreakpointValue,
  BreakpointValues,
  defaultBreakpointKey,
  PropertyValue,
} from "../media";
import {Theme} from "../theme";

export default (
  values?: BreakpointValue<PropertyValue>,
  theme?: Theme,
): BreakpointValues<PropertyValue> => {
  const defaultKey = defaultBreakpointKey(theme);
  let output = values || {};

  if (typeof output !== "object") {
    const newValues = {};

    if (defaultKey !== null) {
      newValues[defaultKey] = output;
    }

    output = newValues;
  }

  if (defaultKey !== null && output[defaultKey] === undefined) {
    output[defaultKey] = undefined;
  }

  return output;
};
