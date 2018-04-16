// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import "../utils/bootstrap";
import renderDirection from "./renderDirection";
import renderGutter from "./renderGutter";
import RowDirection from "./RowDirection";
import RowProperties from "./RowProperties";
import { BreakpointValue, PropertyValue } from "../media";
import { styled, Theme } from "../theme";
import { render } from "../utils";

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  ${(props: RowProperties) => {
    const renderer = {
      direction: (value?: PropertyValue) =>
        renderDirection(value as RowDirection),
      gutter: (value?: PropertyValue) => renderGutter(value as boolean)
    };
    const valueMap = {
      direction: props!.direction as BreakpointValue<RowDirection>,
      gutter: props!.noGutter as BreakpointValue<boolean>
    };

    return render(valueMap, renderer, props!.theme);
  }};
`;

export default Row;
