import { SimpleInterpolation, InterpolationValue } from "styled-components";
import BreakpointMap from "./BreakpointMap";
import {
  BreakpointValuesMap,
  PropertyValuesMap,
  PropertyValue
} from "./BreakpointValue";
import { css, injectGlobal } from "./StyledComponents";
import { Theme } from "./Theme";

export function _css(
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): string {
  return css(strings, ...interpolations).join("") as string;
}

export function _getGutterWidth(theme?: Theme) {
  const gutterWidth = theme!.gutterWidth || 30;

  return gutterWidth / 2;
}

export function _map(source?: PropertyValuesMap): BreakpointValuesMap | null {
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
}

export interface RenderProvider {
  [key: string]: (value?: PropertyValue) => string;
}

export function _render(
  valueMap: PropertyValuesMap,
  breakpoints: BreakpointMap,
  renderer: RenderProvider
): string {
  const values = _map(valueMap) || {};
  const keys = Object.keys(values).filter(
    key => breakpoints[key] != null && typeof values[key] === "object"
  );
  const propertyKeys = Object.keys(valueMap).filter(
    key => renderer[key] != null
  );

  return keys.reduce(
    (acc, key) =>
      (acc += _resolve(breakpoints, key)`
    ${propertyKeys.reduce(
      (acc2, key2) =>
        (acc2 += renderer[key2](values[key] && values[key][key2])),
      ""
    )}
  `),
    ""
  );
}

export function _resolve(breakpoints: BreakpointMap, key: string) {
  return (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): string => {
    const minWidth = breakpoints[key];

    if (minWidth == null || minWidth === 0) {
      return _css(strings, ...interpolations);
    }

    return _css`
      @media (min-width: ${minWidth}px) {
        ${css(strings, ...interpolations)}
      }
    `;
  };
}

function _toString(from: InterpolationValue[]): string {
  return from.join("") as string;
}
