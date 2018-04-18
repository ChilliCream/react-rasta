import RowDirection from "./RowDirection";
import { css } from "../utils";

export default (direction?: RowDirection): string => {
  if (
    direction === "column" ||
    direction === "column-reverse" ||
    direction === "row" ||
    direction === "row-reverse"
  ) {
    return css`
      flex-direction: ${direction} !important;
    `;
  } else {
    return "";
  }
};
