import map from "./map";
import RenderProvider from "./RenderProvider";
import resolve from "./resolve";
import { BreakpointMap, PropertyValuesMap } from "../media";

export default (
  valueMap: PropertyValuesMap,
  breakpoints: BreakpointMap,
  renderer: RenderProvider
): string => {
  const values = map(valueMap) || {};
  const keys = Object.keys(values).filter(
    key => breakpoints[key] != null && typeof values[key] === "object"
  );
  const propertyKeys = Object.keys(valueMap).filter(
    key => renderer[key] != null
  );

  return keys.reduce(
    (acc, key) =>
      (acc += resolve(breakpoints, key)`
        ${propertyKeys.reduce(
          (acc2, key2) =>
            (acc2 += renderer[key2](values[key] && values[key][key2])),
          ""
        )}
      `),
    ""
  );
};
