import ColumnFlex from "./ColumnFlex";
import { css } from "../utils";

export default (flex?: ColumnFlex): string => {
  switch (flex) {
    case "grow":
      return css`
        flex: auto !important;
      `;

    case "none":
      return css`
        flex: initial !important;
      `;

    case "shrink":
      return css`
        flex-shrink: 0 !important;
      `;

    default:
      return "";
  }
};
