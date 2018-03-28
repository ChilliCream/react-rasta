// These imports are needed for declaration files
import * as _React from 'react';
import * as _StyledComponents from 'styled-components';
// -------------------------------------------------------------------
import { _getBreakpoints } from './BreakpointMap';
import { BreakpointValue, BreakpointValues, PropertyValue } from './BreakpointValue';
import ThemeProperties, { Theme } from './Theme';
import styled from './StyledComponents';
import { _getGutterWidth, _ensureInjectingGlobal, _render } from './Utilities';

export interface ContainerProperties extends ThemeProperties {
  fluid?: BreakpointValue<boolean>;
  width?: BreakpointValues<number>;
}

const defaultWidth: BreakpointValues<number> = {
  'sm': 540,
  'md': 720,
  'lg': 960,
  'xl': 1140
};

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${
    (props: ContainerProperties) => {
      const width = _getGutterWidth(props.theme);

      return `
        padding-right: ${width}px;
        padding-left: ${width}px;
      `;
    }
  }
  ${
    (props: ContainerProperties) => {
      if (props.fluid) {
        return '';
      } else {
        const breakpoints = _getBreakpoints(props!.theme);
        const renderer = {
          width: (value?: PropertyValue) => _renderWidth(value as number)
        };
        const valueMap = {
          width: props!.width || defaultWidth
        };

        return `
          ${_render(valueMap, breakpoints, renderer)}
        `;
      }
    }
  }
`;

export default Container;

function _renderWidth(width?: number): string {
  if (width != null && typeof width === 'number') {
    return `
      max-width: ${width}px;
    `;
  }

  return '';
}

_ensureInjectingGlobal();