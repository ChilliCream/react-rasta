// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import "../utils/bootstrap";
import renderNoGutter from "./renderNoGutter";
import RowProperties from "./RowProperties";
import { breakpoints, BreakpointValues, PropertyValue } from "../media";
import { gutterWidth, styled, Theme } from "../theme";
import { css, render } from "../utils";

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  ${(props: RowProperties) => {
    const breakpointsMap = breakpoints(props!.theme);
    const renderer = {
      noGutter: (value?: PropertyValue) => renderNoGutter(value as boolean)
    };
    const valueMap = {
      noGutter: props!.noGutter as BreakpointValues<boolean>
    };
    const width = gutterWidth(props.theme);

    return `
        margin-right: -${width}px;
        margin-left: -${width}px;

        ${render(valueMap, breakpointsMap, renderer)}
        ${renderNoGutter(props!.noGutter as boolean)}
      `;
  }};
`;

export default Row;
