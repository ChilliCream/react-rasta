import RowAlignContent from "./RowAlignContent";
import { css } from "../utils";

export default (alignContent?: RowAlignContent): string => {
  if (
    alignContent === "center" ||
    alignContent === "flex-end" ||
    alignContent === "flex-start" ||
    alignContent === "space-around" ||
    alignContent === "space-between" ||
    alignContent === "stretch"
  ) {
    return css`
      align-content: ${alignContent} !important;
    `;
  } else {
    return "";
  }
};
