import RowAlignItems from "./RowAlignItems";
import { css, equals } from "../utils";

export default (alignItems?: RowAlignItems): string => {
  if (
    equals(alignItems, [
      "baseline",
      "center",
      "flex-end",
      "flex-start",
      "stretch"
    ])
  ) {
    return css`
      align-items: ${alignItems + ""} !important;
    `;
  } else {
    return "";
  }
};
