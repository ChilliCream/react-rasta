// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import "../utils/bootstrap";
import ContainerProperties from "./ContainerProperties";
import renderWidth from "./renderWidth";
import getWidth from "./width";
import { PropertyValue } from "../media";
import { gutterWidth, styled, Theme } from "../theme";
import { render } from "../utils";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${(props: ContainerProperties) => {
    const width = gutterWidth(props.theme);

    return `
      padding-right: ${width}px;
      padding-left: ${width}px;
    `;
  }} ${(props: ContainerProperties) => {
    if (props.fluid) {
      return "";
    } else {
      const renderer = {
        width: (value?: PropertyValue) => renderWidth(value as number)
      };
      const valueMap = {
        width: getWidth(props)
      };

      return render(valueMap, renderer, props!.theme);
    }
  }};
`;

export default Container;
