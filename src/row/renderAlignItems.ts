import {css} from "../utils";
import RowAlignItems from "./RowAlignItems";

export default (alignItems?: RowAlignItems): string => {
  const allowedValues = [
    "baseline",
    "center",
    "flex-end",
    "flex-start",
    "stretch",
  ];

  if (allowedValues.includes(alignItems!)) {
    return css`
      align-items: ${alignItems + ""} !important;
    `;
  } else {
    return "";
  }
};
