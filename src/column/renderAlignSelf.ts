import {css} from "../utils";
import ColumnAlignSelf from "./ColumnAlignSelf";

export default (alignSelf?: ColumnAlignSelf): string => {
  const allowedValues = [
    "baseline",
    "center",
    "flex-end",
    "flex-start",
    "stretch",
  ];

  if (allowedValues.includes(alignSelf!)) {
    return css`
      align-self: ${alignSelf!} !important;
    `;
  } else {
    return "";
  }
};
