// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import { _getBreakpoints } from "./BreakpointMap";
import {
  BreakpointValue,
  BreakpointValues,
  PropertyValue,
  _getContainerWidth
} from "./BreakpointValue";
import ThemeProperties, { Theme } from "./Theme";
import styled from "./StyledComponents";
import { _ensureInjectingGlobal, _getGutterWidth, _render } from "./Utilities";

export interface ContainerProperties extends ThemeProperties {
  fluid?: BreakpointValue<boolean>;
  width?: BreakpointValues<number>;
}

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${(props: ContainerProperties) => {
    const width = _getGutterWidth(props.theme);

    return `
        padding-right: ${width}px;
        padding-left: ${width}px;
      `;
  }} ${(props: ContainerProperties) => {
    if (props.fluid) {
      return "";
    } else {
      const breakpoints = _getBreakpoints(props!.theme);
      const renderer = {
        width: (value?: PropertyValue) => _renderWidth(value as number)
      };
      const valueMap = {
        width: _getContainerWidth(props)
      };

      return `
          ${_render(valueMap, breakpoints, renderer)}
        `;
    }
  }};
`;

export default Container;

function _renderWidth(width?: number): string {
  if (width != null && typeof width === "number") {
    return `
      max-width: ${width}px;
    `;
  }

  return "";
}

_ensureInjectingGlobal();
