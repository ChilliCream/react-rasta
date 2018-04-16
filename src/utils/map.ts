import prepare from "./prepare";
import { BreakpointValuesMap, PropertyValuesMap } from "../media";
import { Theme } from "../theme";

export default (
  source?: PropertyValuesMap,
  theme?: Theme
): BreakpointValuesMap | null => {
  if (source != null) {
    const propertyKeys = Object.keys(source);
    const destination: BreakpointValuesMap = {};

    for (let i = 0; i < propertyKeys.length; i++) {
      const propertyKey = propertyKeys[i];
      const values = prepare(source[propertyKey], theme);
      const breakpointKeys = Object.keys(values);

      for (let j = 0; j < breakpointKeys.length; j++) {
        const breakpointKey = breakpointKeys[j];

        destination[breakpointKey] = destination[breakpointKey] || {};
        destination[breakpointKey][propertyKey] = values[breakpointKey];
      }
    }

    return destination;
  }

  return null;
};
