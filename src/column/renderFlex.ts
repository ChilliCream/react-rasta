import {css} from "../utils";
import ColumnFlex from "./ColumnFlex";

export default (flex?: ColumnFlex): string => {
  switch (flex) {
    case "grow":
      return css`
        flex-grow: 1 !important;
      `;

    case "shrink":
      return css`
        flex-shrink: 0 !important;
      `;

    default:
      return "";
  }
};
