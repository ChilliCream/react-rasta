import RowAlignContent from "./RowAlignContent";
import { css, equals } from "../utils";

export default (alignContent?: RowAlignContent): string => {
  if (
    equals(alignContent, [
      "center",
      "flex-end",
      "flex-start",
      "space-around",
      "space-between",
      "stretch"
    ])
  ) {
    return css`
      align-content: ${alignContent + ""} !important;
    `;
  } else {
    return "";
  }
};
