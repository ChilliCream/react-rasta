import {css} from "../utils";
import RowAlignContent from "./RowAlignContent";

export default (alignContent?: RowAlignContent): string => {
  const allowedValues = [
    "center",
    "flex-end",
    "flex-start",
    "space-around",
    "space-between",
    "stretch",
  ];

  if (allowedValues.includes(alignContent!)) {
    return css`
      align-content: ${alignContent + ""} !important;
    `;
  } else {
    return "";
  }
};
