import RowJustifyContent from "./RowJustifyContent";
import { css, equals } from "../utils";

export default (contentJustify?: RowJustifyContent): string => {
  if (
    equals(contentJustify, [
      "center",
      "flex-end",
      "flex-start",
      "space-around",
      "space-between"
    ])
  ) {
    return css`
      justify-content: ${contentJustify + ""} !important;
    `;
  } else {
    return "";
  }
};
