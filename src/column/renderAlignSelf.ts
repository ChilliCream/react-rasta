import ColumnAlignSelf from "./ColumnAlignSelf";
import { css, equals } from "../utils";

export default (alignSelf?: ColumnAlignSelf): string => {
  if (
    equals(alignSelf, [
      "baseline",
      "center",
      "flex-end",
      "flex-start",
      "stretch"
    ])
  ) {
    return css`
      align-self: ${alignSelf + ""} !important;
    `;
  } else {
    return "";
  }
};
