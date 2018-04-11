import { BreakpointValuesMap, PropertyValuesMap } from "../BreakpointValue";

export default (source?: PropertyValuesMap): BreakpointValuesMap | null => {
  if (source != null) {
    const propertyKeys = Object.keys(source).filter(key => source[key] != null);
    const destination: BreakpointValuesMap = {};

    for (let i = 0; i < propertyKeys.length; i++) {
      const propertyKey = propertyKeys[i];
      const values = source[propertyKey];
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
