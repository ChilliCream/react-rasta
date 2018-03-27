// These imports are needed for declaration files
import * as _React from 'react';
import * as _StyledComponents from 'styled-components';
// -------------------------------------------------------------------
import { defaultBreakpoints } from './BreakpointMap';
import { BreakpointValue, BreakpointValues } from './BreakpointValue';
import ThemeProperties, { Theme } from './Theme';
import styled from './StyledComponents';
import { _getGutterWidth, _resolve, _ensureInjectingGlobal } from './Utilities';

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
  padding-right: ${(props: ContainerProperties) => _getGutterWidth(props.theme)}px;
  padding-left: ${(props: ContainerProperties) => _getGutterWidth(props.theme)}px;
  margin-right: auto;
  margin-left: auto;

  ${(props: ContainerProperties) => (props.fluid) ? '' : _renderWidth(props.theme, props.width)}
`;

export default Container;

function _renderWidth(theme?: Theme, width?: BreakpointValues<number>): string {
  const breakpoints = theme!.breakpoints || defaultBreakpoints;
  const values = width || defaultWidth;
  const keys = Object.keys(values).filter(key => breakpoints[key] != null && breakpoints[key] > 0);

  return keys.reduce((acc, key) => acc += _resolve(breakpoints, key)`
    max-width: ${values[key]}px;
  `, '');
}

_ensureInjectingGlobal();