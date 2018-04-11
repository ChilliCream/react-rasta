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
import { InterpolationValue } from "styled-components";
import Theme from "./theming/Theme";
import ThemeProperties from "./theming/ThemeProperties";
import styled from "./theming/StyledComponents";
import render from "./utils/render";
import gutterWidth from "./theming/gutterWidth";

export type ColumnSize =
  | "auto"
  | "none"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
export type ColumnOrder =
  | "first"
  | "last"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export interface ColumnProperties extends ThemeProperties {
  order?: BreakpointValue<ColumnOrder>;
  size?: BreakpointValue<ColumnSize>;
}

const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;

  ${(props: ColumnProperties) => {
    const breakpoints = _getBreakpoints(props!.theme);
    const renderer = {
      order: (value?: PropertyValue) => renderOrder(value as ColumnOrder),
      size: (value?: PropertyValue) => renderSize(value as ColumnSize)
    };
    const valueMap = {
      order: props!.order as BreakpointValues<ColumnOrder>,
      size: props!.size as BreakpointValues<ColumnSize>
    };
    const width = gutterWidth(props.theme);

    return `
        padding-right: ${width}px;
        padding-left: ${width}px;

        ${render(valueMap, breakpoints, renderer)}
        ${renderOrder(props!.order as ColumnOrder)}
        ${renderSize(props!.size as ColumnSize)}
      `;
  }};
`;

export default Column;

function renderOrder(order?: ColumnOrder | 0 | 13): string {
  if (order != null && typeof order !== "object") {
    if (order === "first") {
      return renderOrder(0);
    }

    if (order === "last") {
      return renderOrder(13);
    }

    if (typeof order === "number") {
      return `
        -webkit-box-ordinal-group: ${order};
        -ms-flex-order: ${order - 1};
        order: ${order - 1};
      `;
    }
  }

  return "";
}

function renderSize(size?: ColumnSize): string {
  if (size == null || typeof size === "object" || size < 1 || size > 12) {
    return "";
  }

  if (size === "none") {
    return `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    `;
  }

  if (size === "auto") {
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
