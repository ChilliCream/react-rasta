import RowDirection from "./RowDirection";
import { css } from "../utils";

export default (direction?: RowDirection): string => {
  if (
    direction === "column" ||
    direction === "column-reverse" ||
    direction === "row" ||
    direction === "row-reverse"
  ) {
    const orient =
      direction.indexOf("column") === -1 ? "horizontal" : "vertical";
    const dir = direction.indexOf("-reverse") === -1 ? "normal" : "reverse";

    return css`
      -webkit-box-orient: ${orient} !important;
      -webkit-box-direction: ${dir} !important;
      -ms-flex-direction: ${direction} !important;
      flex-direction: ${direction} !important;
    `;
  }

  return "";
};
