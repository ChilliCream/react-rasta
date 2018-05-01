import "../utils/bootstrap";
import { ClassAttributes, HTMLAttributes } from "react";
import { StyledComponentClass } from "styled-components";
import ContainerProperties from "./ContainerProperties";
import fullscreen from "./fullscreen";
import renderWidth from "./renderWidth";
import getWidth from "./width";
import { PropertyValue } from "../media";
import Row from "../row";
import { gutterWidth, styled, Theme } from "../theme";
import { css, render } from "../utils";

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
    if (props.fullscreen) {
      fullscreen();

      return css`
        height: 100%;

        > ${Row} {
          height: 100%;
        }
      `;
    } else if (props.fluid) {
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
