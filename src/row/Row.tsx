import "../utils/bootstrap";
import { ClassAttributes, HTMLAttributes } from "react";
import { StyledComponentClass } from "styled-components";
import renderAlignItems from "./renderAlignItems";
import renderDirection from "./renderDirection";
import renderGutter from "./renderGutter";
import renderJustifyContent from "./renderJustifyContent";
import renderWrap from "./renderWrap";
import RowAlignItems from "./RowAlignItems";
import RowDirection from "./RowDirection";
import RowJustifyContent from "./RowJustifyContent";
import RowProperties from "./RowProperties";
import RowWrap from "./RowWrap";
import { BreakpointValue, PropertyValue } from "../media";
import { styled, Theme } from "../theme";
import { render } from "../utils";

const Row = styled.div`
  display: flex;

  ${(props: RowProperties) => {
    const renderer = {
      alignItems: (value?: PropertyValue) =>
        renderAlignItems(value as RowAlignItems),
      justifyContent: (value?: PropertyValue) =>
        renderJustifyContent(value as RowJustifyContent),
      direction: (value?: PropertyValue) =>
        renderDirection(value as RowDirection),
      gutter: (value?: PropertyValue) => renderGutter(value as boolean),
      wrap: (value?: PropertyValue) => renderWrap(value as RowWrap)
    };
    const valueMap = {
      alignItems: props!.alignItems as BreakpointValue<RowAlignItems>,
      justifyContent: props!.justifyContent as BreakpointValue<
        RowJustifyContent
      >,
      direction: props!.direction as BreakpointValue<RowDirection>,
      gutter: props!.noGutter as BreakpointValue<boolean>,
      wrap: props!.wrap as BreakpointValue<RowWrap>
    };

    return render(valueMap, renderer, props!.theme);
  }};
`;

export default Row;
