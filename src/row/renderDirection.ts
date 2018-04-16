import Row from "./Row";
import RowDirection from "./RowDirection";
import { css } from "../utils";

export default (direction?: RowDirection): string => {
  if (direction != null && typeof direction === "string" && direction) {
    switch (direction) {
      case "column":
        return css`
          -webkit-box-orient: vertical !important;
          -webkit-box-direction: normal !important;
          -ms-flex-direction: column !important;
          flex-direction: column !important;
        `;

      case "column-reverse":
        return css`
          -webkit-box-orient: vertical !important;
          -webkit-box-direction: reverse !important;
          -ms-flex-direction: column-reverse !important;
          flex-direction: column-reverse !important;
        `;

      case "row":
        return css`
          -webkit-box-orient: horizontal !important;
          -webkit-box-direction: normal !important;
          -ms-flex-direction: row !important;
          flex-direction: row !important;
        `;

      case "row-reverse":
        return css`
          -webkit-box-orient: horizontal !important;
          -webkit-box-direction: reverse !important;
          -ms-flex-direction: row-reverse !important;
          flex-direction: row-reverse !important;
        `;

      default:
        return "";
    }
  }

  return "";
};
