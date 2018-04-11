// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import "./utils/bootstrap";
import { _getBreakpoints } from "./BreakpointMap";
import {
  BreakpointValue,
  BreakpointValues,
  PropertyValue
} from "./BreakpointValue";
import Column from "./Column";
import Theme from "./theming/Theme";
import ThemeProperties from "./theming/ThemeProperties";
import styled from "./theming/StyledComponents";
import css from "./utils/css";
import render from "./utils/render";
import gutterWidth from "./theming/gutterWidth";

export interface RowProperties extends ThemeProperties {
  noGutter?: BreakpointValue<boolean>;
}

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  ${(props: RowProperties) => {
    const breakpoints = _getBreakpoints(props!.theme);
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

        ${render(valueMap, breakpoints, renderer)}
        ${renderNoGutter(props!.noGutter as boolean)}
      `;
  }};
`;

export default Row;

function renderNoGutter(noGutter?: boolean): string {
  if (noGutter != null && typeof noGutter === "boolean" && noGutter) {
    return css`
      margin-right: 0;
      margin-left: 0;

      > ${Column} {
        padding-right: 0;
        padding-left: 0;
      }
    `;
  }

  return "";
}
