// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import "../utils/bootstrap";
import renderDirection from "./renderDirection";
import renderGutter from "./renderGutter";
import renderWrap from "./renderWrap";
import RowDirection from "./RowDirection";
import RowProperties from "./RowProperties";
import RowWrap from "./RowWrap";
import { BreakpointValue, PropertyValue } from "../media";
import { styled, Theme } from "../theme";
import { render } from "../utils";

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  ${(props: RowProperties) => {
    const renderer = {
      direction: (value?: PropertyValue) =>
        renderDirection(value as RowDirection),
      gutter: (value?: PropertyValue) => renderGutter(value as boolean),
      wrap: (value?: PropertyValue) => renderWrap(value as RowWrap)
    };
    const valueMap = {
      direction: props!.direction as BreakpointValue<RowDirection>,
      gutter: props!.noGutter as BreakpointValue<boolean>,
      wrap: props!.wrap as BreakpointValue<RowWrap>
    };

    return render(valueMap, renderer, props!.theme);
  }};
`;

export default Row;
