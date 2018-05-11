import {css} from "../utils";
import RowDirection from "./RowDirection";

export default (direction?: RowDirection): string => {
  const allowedValues = ["column", "column-reverse", "row", "row-reverse"];

  if (allowedValues.includes(direction!)) {
    return css`
      flex-direction: ${direction + ""} !important;
    `;
  } else {
    return "";
  }
};
