import map from "./map";
import RenderProvider from "./RenderProvider";
import resolve from "./resolve";
import { BreakpointMap, breakpoints, PropertyValuesMap } from "../media";
import { Theme } from "../theme";

export default (
  valueMap: PropertyValuesMap,
  renderer: RenderProvider,
  theme?: Theme
): string => {
  const breakpointsMap = breakpoints(theme);
  const values = map(valueMap, theme) || {};
  const keys = Object.keys(values).filter(
    key => breakpointsMap[key] != null && typeof values[key] === "object"
  );
  const propertyKeys = Object.keys(valueMap).filter(
    key => renderer[key] != null
  );

  return keys.reduce(
    (acc, key) =>
      (acc += resolve(breakpointsMap, key)`
        ${propertyKeys.reduce(
          (acc2, key2) =>
            (acc2 += renderer[key2](values[key] && values[key][key2])),
          ""
        )}
      `),
    ""
  );
};
