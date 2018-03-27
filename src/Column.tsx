// These imports are needed for declaration files
import * as _React from 'react';
import * as _StyledComponents from 'styled-components';
// -------------------------------------------------------------------
import { InterpolationValue } from 'styled-components';
import { defaultBreakpoints } from './BreakpointMap';
import { BreakpointValue, BreakpointValues, BreakpointValuesMap } from './BreakpointValue';
import styled from './StyledComponents';
import ThemeProperties, { Theme } from './Theme';
import { _getGutterWidth, _resolve, _ensureInjectingGlobal, _map } from './Utilities';

export type ColumnSize = 'auto' | 'none' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnOrder = 'first' | 'last' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProperties extends ThemeProperties {
  order?: BreakpointValue<ColumnOrder>;
  size?: BreakpointValue<ColumnSize>;
}

const Column = styled.div.attrs({
  className: 'rr-column'
})`
  position: relative;
  width: 100%;
  min-height: 1px;

  ${
    (props: ColumnProperties) => {
      const breakpoints = props!.theme!.breakpoints || defaultBreakpoints;
      const orderValues = props!.order as BreakpointValues<ColumnOrder>;
      const sizeValues = props!.size as BreakpointValues<ColumnSize>;
      const valueMap: BreakpointValuesMap = {};
      const width = _getGutterWidth(props.theme);
      
      if (orderValues != null) {
        valueMap.order = orderValues;
      }
      
      if (sizeValues != null) {
        valueMap.size = sizeValues;
      }

      const values = _map(valueMap) || {};
      const keys = Object.keys(values).filter(key => breakpoints[key] != null);

      console.log(valueMap);
      console.log(values);
      console.log(keys);

      return `
        padding-right: ${width}px;
        padding-left: ${width}px;

        ${
          keys.reduce((acc, key) => acc += _resolve(breakpoints, key)`
            ${_renderOrder(values[key]!.order as ColumnOrder)}
            ${_renderSize(values[key]!.size as ColumnSize)}
          `, '')
        }
        ${_renderOrder(props.order as ColumnOrder)}
        ${_renderSize(props.size as ColumnSize)}
      `;
    }
  }
`;

export default Column;

function _renderOrder(order?: ColumnOrder | -1 | 13): string {
  if (order == null) {
    return '';
  }

  if (order === 'first') {
    return _renderOrder(-1);
  }

  if (order === 'last') {
    return _renderOrder(13);
  }

  if (typeof order === 'number') {
    return `
      -webkit-box-ordinal-group: ${order};
      -ms-flex-order: ${order - 1};
      order: ${order - 1};
    `;
  }

  return '';
}

function _renderSize(size?: ColumnSize): string {
  if (size == null || size < 1 || size > 12) {
    return '';
  }

  if (size === 'none') {
    return `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    `;
  }

  if (size === 'auto') {
    return `
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    `;
  }

  const percentage = (size / 12 * 100).toFixed(6);

  return `
    -webkit-box-flex: 0;
    -ms-flex: 0 0 ${percentage}%;
    flex: 0 0 ${percentage}%;
    max-width: ${percentage}%;
  `;
}

_ensureInjectingGlobal();