// These imports are needed for declaration files
import * as _React from 'react';
import * as _StyledComponents from 'styled-components';
// -------------------------------------------------------------------
import { defaultBreakpoints } from './BreakpointMap';
import { BreakpointValue, BreakpointValues } from './BreakpointValue';
import styled from './StyledComponents';
import ThemeProperties, { Theme } from './Theme';
import { _getGutterWidth, _resolve, _ensureInjectingGlobal } from './Utilities';

export interface RowProperties extends ThemeProperties {
  noGutter?: BreakpointValue<boolean>;
}

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  ${
    (props: RowProperties) => {
      const width = _getGutterWidth(props.theme);

      return `
        margin-right: -${width}px;
        margin-left: -${width}px;

        ${_renderNoGutter(props.theme, props.noGutter)}
      `;
    }
  }
`;

export default Row;

function _renderNoGutter(theme?: Theme, noGutter?: BreakpointValue<boolean>): string {
  if (noGutter == null) {
    return '';
  }

  if (typeof noGutter === 'boolean') {
    if (noGutter) {
      return `
        margin-right: 0;
        margin-left: 0;
      
        > .rr-column {
          padding-right: 0;
          padding-left: 0;
        }
      `;
    }
  
    return '';
  }

  const breakpoints = theme!.breakpoints || defaultBreakpoints;
  const values = noGutter as BreakpointValues<boolean>;
  const keys = Object.keys(values).filter(key => breakpoints[key] != null);

  return keys.reduce((acc, key) => acc += _resolve(breakpoints, key)`
    ${_renderNoGutter(theme, values[key])}
  `, '');
}

_ensureInjectingGlobal();