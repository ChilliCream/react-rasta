// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import "./utils/bootstrap";
import { _getBreakpoints } from "./BreakpointMap";
import {
  BreakpointValue,
  BreakpointValues,
  PropertyValue,
  _getContainerWidth
} from "./BreakpointValue";
import Theme from "./theming/Theme";
import ThemeProperties from "./theming/ThemeProperties";
import styled from "./theming/StyledComponents";
import render from "./utils/render";
import gutterWidth from "./theming/gutterWidth";

export interface ContainerProperties extends ThemeProperties {
  fluid?: boolean;
  width?: BreakpointValues<number>;
}

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${(props: ContainerProperties) => {
    const width = gutterWidth(props.theme);

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
        width: (value?: PropertyValue) => renderWidth(value as number)
      };
      const valueMap = {
        width: _getContainerWidth(props)
      };

      return `
        ${render(valueMap, breakpoints, renderer)}
      `;
    }
  }};
`;

export default Container;

function renderWidth(width?: number): string {
  if (width != null && typeof width === "number") {
    return `
      max-width: ${width}px;
    `;
  }

  return "";
}
