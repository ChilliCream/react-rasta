import {
  BreakpointMap,
  breakpoints,
  PropertyValues,
  PropertyValuesMap,
} from "../media";
import {Theme} from "../theme";
import map from "./map";
import RenderProvider from "./RenderProvider";
import resolve from "./resolve";

export default (
  valueMap: PropertyValuesMap,
  renderer: RenderProvider,
  theme?: Theme,
): string => {
  const breakpointsMap = breakpoints(theme);
  const breakpointValues = map(valueMap, theme) || {};
  // the next expression is for JS projects
  // tslint:disable:strict-type-predicates
  const breakpointKeys = Object.keys(breakpointValues).filter(
    (breakpointKey) =>
      breakpointsMap[breakpointKey] != null &&
      typeof breakpointValues[breakpointKey] === "object",
  );
  const propertyKeys = Object.keys(valueMap).filter(
    (propertyKey) => renderer[propertyKey] != null,
  );
  // tslint:enable:strict-type-predicates
  const previousValues: PropertyValues = {};
  let count = 0;

  return breakpointKeys.reduce((acc, breakpointKey) => {
    count++;

    return (
      acc +
      resolve(breakpointsMap, breakpointKey)`
        ${propertyKeys.reduce((acc2, propertyKey) => {
          const value =
            breakpointValues[breakpointKey] &&
            breakpointValues[breakpointKey][propertyKey];

          if (count > 1 && previousValues[propertyKey] === value) {
            return acc2;
          } else {
            previousValues[propertyKey] = value;

            return acc2 + renderer[propertyKey](value);
          }
        }, "")}
      `
    );
  }, "");
};
