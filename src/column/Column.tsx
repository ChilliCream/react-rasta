import "../utils/bootstrap";
import { ClassAttributes, HTMLAttributes } from "react";
import { StyledComponentClass } from "styled-components";
import ColumnProperties from "./ColumnProperties";
import ColumnOffset from "./ColumnOffset";
import ColumnOrder from "./ColumnOrder";
import ColumnSize from "./ColumnSize";
import renderOffset from "./renderOffset";
import renderOrder from "./renderOrder";
import renderSize from "./renderSize";
import { BreakpointValue, PropertyValue } from "../media";
import { styled, Theme } from "../theme";
import { render } from "../utils";

const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;

  ${(props: ColumnProperties) => {
    const renderer = {
      offset: (value?: PropertyValue) => renderOffset(value as ColumnOffset),
      order: (value?: PropertyValue) => renderOrder(value as ColumnOrder),
      size: (value?: PropertyValue) => renderSize(value as ColumnSize)
    };
    const valueMap = {
      offset: props!.offset as BreakpointValue<ColumnOffset>,
      order: props!.order as BreakpointValue<ColumnOrder>,
      size: props!.size as BreakpointValue<ColumnSize>
    };

    return render(valueMap, renderer, props!.theme);
  }};
`;

export default Column;
