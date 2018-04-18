import RowJustifyContent from "./RowJustifyContent";
import { css } from "../utils";

export default (contentJustify?: RowJustifyContent): string => {
  if (
    contentJustify === "center" ||
    contentJustify === "flex-end" ||
    contentJustify === "flex-start" ||
    contentJustify === "space-around" ||
    contentJustify === "space-between"
  ) {
    return css`
      justify-content: ${contentJustify} !important;
    `;
  } else {
    return "";
  }
};
