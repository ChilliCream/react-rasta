import {ClassAttributes, HTMLAttributes} from "react";
import {StyledComponentClass} from "styled-components";
import {BreakpointValue, PropertyValue} from "../media";
import {styled, Theme} from "../theme";
import {render} from "../utils";
import "../utils/bootstrap";
import ColumnAlignSelf from "./ColumnAlignSelf";
import ColumnFlex from "./ColumnFlex";
import ColumnOffset from "./ColumnOffset";
import ColumnOrder from "./ColumnOrder";
import ColumnProperties from "./ColumnProperties";
import ColumnSize from "./ColumnSize";
import renderAlignSelf from "./renderAlignSelf";
import renderFlex from "./renderFlex";
import renderOffset from "./renderOffset";
import renderOrder from "./renderOrder";
import renderSize from "./renderSize";

const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;

  ${(props: ColumnProperties) => {
    const renderer = {
      alignSelf: (value?: PropertyValue) =>
        renderAlignSelf(value as ColumnAlignSelf),
      flex: (value?: PropertyValue) => renderFlex(value as ColumnFlex),
      offset: (value?: PropertyValue) => renderOffset(value as ColumnOffset),
      order: (value?: PropertyValue) => renderOrder(value as ColumnOrder),
      size: (value?: PropertyValue) => renderSize(value as ColumnSize),
    };
    const valueMap = {
      alignSelf: props!.alignSelf as BreakpointValue<ColumnAlignSelf>,
      flex: props!.flex as BreakpointValue<ColumnFlex>,
      offset: props!.offset as BreakpointValue<ColumnOffset>,
      order: props!.order as BreakpointValue<ColumnOrder>,
      size: props!.size as BreakpointValue<ColumnSize>,
    };

    return render(valueMap, renderer, props!.theme);
  }};
`;

export default Column;
