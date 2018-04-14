// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import "../utils/bootstrap";
import { InterpolationValue } from "styled-components";
import ColumnProperties from "./ColumnProperties";
import ColumnOffset from "./ColumnOffset";
import ColumnOrder from "./ColumnOrder";
import ColumnSize from "./ColumnSize";
import renderOffset from "./renderOffset";
import renderOrder from "./renderOrder";
import renderSize from "./renderSize";
import {
  breakpoints,
  BreakpointValue,
  BreakpointValues,
  PropertyValue
} from "../media";
import { gutterWidth, styled, Theme } from "../theme";
import { render } from "../utils";

const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;

  ${(props: ColumnProperties) => {
    const breakpointsMap = breakpoints(props!.theme);
    const renderer = {
      offset: (value?: PropertyValue) => renderOffset(value as ColumnOffset),
      order: (value?: PropertyValue) => renderOrder(value as ColumnOrder),
      size: (value?: PropertyValue) => renderSize(value as ColumnSize)
    };
    const valueMap = {
      offset: props!.offset as BreakpointValues<ColumnOffset>,
      order: props!.order as BreakpointValues<ColumnOrder>,
      size: props!.size as BreakpointValues<ColumnSize>
    };
    const width = gutterWidth(props.theme);

    return `
        padding-right: ${width}px;
        padding-left: ${width}px;

        ${render(valueMap, breakpointsMap, renderer)}
        ${renderOffset(props!.offset as ColumnOffset)}
        ${renderOrder(props!.order as ColumnOrder)}
        ${renderSize(props!.size as ColumnSize)}
      `;
  }};
`;

export default Column;
