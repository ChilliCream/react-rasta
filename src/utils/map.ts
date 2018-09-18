import {BreakpointValuesMap, PropertyValuesMap} from "../media";
import {Theme} from "../theme";
import prepare from "./prepare";

export default (
  source?: PropertyValuesMap,
  theme?: Theme,
): BreakpointValuesMap | null => {
  if (source !== undefined) {
    return Object.keys(source).reduce<BreakpointValuesMap>(
      (destination, propertyKey) => {
        const values = prepare(source[propertyKey], theme);

        Object.keys(values).forEach((breakpointKey) => {
          destination[breakpointKey] = destination[breakpointKey] || {};
          destination[breakpointKey][propertyKey] = values[breakpointKey];
        });

        return destination;
      },
      {},
    );
  }

  return null;
};
