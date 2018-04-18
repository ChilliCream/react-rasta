import RowAlignItems from "./RowAlignItems";
import { css } from "../utils";

export default (alignItems?: RowAlignItems): string => {
  if (
    alignItems === "baseline" ||
    alignItems === "center" ||
    alignItems === "flex-end" ||
    alignItems === "flex-start" ||
    alignItems === "stretch"
  ) {
    return css`
      align-items: ${alignItems} !important;
    `;
  } else {
    return "";
  }
};
