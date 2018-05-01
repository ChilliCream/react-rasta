import RowDirection from "./RowDirection";
import { css, equals } from "../utils";

export default (direction?: RowDirection): string => {
  if (equals(direction, ["column", "column-reverse", "row", "row-reverse"])) {
    return css`
      flex-direction: ${direction + ""} !important;
    `;
  } else {
    return "";
  }
};
