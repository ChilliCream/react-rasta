import { SimpleInterpolation, InterpolationValue } from 'styled-components';
import BreakpointMap from './BreakpointMap';
import { AllowedValues, BreakpointValue, BreakpointValuesMap, BreakpointValueMap, BreakpointValues }
  from './BreakpointValue';
import { css, injectGlobal } from './StyledComponents';
import { Theme } from './Theme';

let _initialized: boolean = false;

export function _getGutterWidth(theme?: Theme) {
  const gutterWidth = theme!.gutterWidth || 30;

  return gutterWidth / 2;
}

export function _ensureInjectingGlobal() {
  if (!_initialized) {
    injectGlobal`
      @-ms-viewport {
        width: device-width;
      }

      html {
        box-sizing: border-box;
        -ms-overflow-style: scrollbar;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
    `;
    _initialized = true;
  }
}

export function _map(valueMaps?: BreakpointValuesMap): BreakpointValueMap | null {
  if (valueMaps != null) {
    const propertyKeys = Object.keys(valueMaps);
    const valueMap: BreakpointValueMap = {};

    for (let i = 0; i < propertyKeys.length; i++) {
      const propertyKey = propertyKeys[i];
      const values = valueMaps[propertyKey];
      const breakpointKeys = Object.keys(values);

      for (let j = 0; j < breakpointKeys.length; j++) {
        const breakpointKey = breakpointKeys[j];

        valueMap[breakpointKey] = valueMap[breakpointKey] || {};
        valueMap[breakpointKey][propertyKey] = values[breakpointKey];
      }
    }

    return valueMap;
  }

  return null;
}

export function _resolve(breakpoints: BreakpointMap, key: string) {
  return (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): string => {
    const minWidth = breakpoints[key];

    if (minWidth == null || minWidth === 0) {
      return _toString(css(strings, ...interpolations));
    }

    return _toString(css`
      @media (min-width: ${minWidth}px) {
        ${css(strings, ...interpolations)}
      }
    `);
  };
}

function _toString(from: InterpolationValue[]): string {
  return from.join('') as string;
}