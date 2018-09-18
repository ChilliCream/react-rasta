import {ClassAttributes, HTMLAttributes} from "react";
import {StyledComponentClass} from "styled-components";
import {BreakpointValue, PropertyValue} from "../media";
import {styled, Theme} from "../theme";
import {render} from "../utils";
import "../utils/bootstrap";
import renderAlignContent from "./renderAlignContent";
import renderAlignItems from "./renderAlignItems";
import renderDirection from "./renderDirection";
import renderGutter from "./renderGutter";
import renderJustifyContent from "./renderJustifyContent";
import renderWrap from "./renderWrap";
import RowAlignContent from "./RowAlignContent";
import RowAlignItems from "./RowAlignItems";
import RowDirection from "./RowDirection";
import RowJustifyContent from "./RowJustifyContent";
import RowProperties from "./RowProperties";
import RowWrap from "./RowWrap";

const Row = styled.div`
  display: flex;

  ${(props: RowProperties) => {
    const renderer = {
      alignContent: (value?: PropertyValue) =>
        renderAlignContent(value as RowAlignContent),
      alignItems: (value?: PropertyValue) =>
        renderAlignItems(value as RowAlignItems),
      justifyContent: (value?: PropertyValue) =>
        renderJustifyContent(value as RowJustifyContent),
      direction: (value?: PropertyValue) =>
        renderDirection(value as RowDirection),
      gutter: (value?: PropertyValue) =>
        renderGutter(value as boolean, props.theme),
      wrap: (value?: PropertyValue) => renderWrap(value as RowWrap),
    };
    const valueMap = {
      alignContent: props.alignContent,
      alignItems: props.alignItems,
      justifyContent: props.justifyContent,
      direction: props.direction,
      gutter: props.noGutter,
      wrap: props.wrap,
    };

    return render(valueMap, renderer, props.theme);
  }};
`;

export default Row;
