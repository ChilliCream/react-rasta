import ColumnAlignSelf from "./ColumnAlignSelf";
import { css } from "../utils";

export default (alignSelf?: ColumnAlignSelf): string => {
  if (
    alignSelf === "baseline" ||
    alignSelf === "center" ||
    alignSelf === "flex-end" ||
    alignSelf === "flex-start" ||
    alignSelf === "stretch"
  ) {
    return css`
      align-self: ${alignSelf} !important;
    `;
  } else {
    return "";
  }
};
