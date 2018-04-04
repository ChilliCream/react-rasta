// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import { _getBreakpoints } from "./BreakpointMap";
import {
  BreakpointValue,
  BreakpointValues,
  PropertyValue
} from "./BreakpointValue";
import Column from "./Column";
import "./Global";
import styled from "./StyledComponents";
import ThemeProperties, { Theme } from "./Theme";
import { _getGutterWidth, _render, _css } from "./Utilities";

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
      noGutter: (value?: PropertyValue) => _renderNoGutter(value as boolean)
    };
    const valueMap = {
      noGutter: props!.noGutter as BreakpointValues<boolean>
    };
    const width = _getGutterWidth(props.theme);

    return `
        margin-right: -${width}px;
        margin-left: -${width}px;

        ${_render(valueMap, breakpoints, renderer)}
        ${_renderNoGutter(props!.noGutter as boolean)}
      `;
  }};
`;

export default Row;

function _renderNoGutter(noGutter?: boolean): string {
  if (noGutter != null && typeof noGutter === "boolean" && noGutter) {
    return _css`
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
