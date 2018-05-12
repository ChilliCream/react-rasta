import {css} from "../utils";
import RowJustifyContent from "./RowJustifyContent";

export default (contentJustify?: RowJustifyContent): string => {
  const allowedValues = [
    "center",
    "flex-end",
    "flex-start",
    "space-around",
    "space-between",
  ];

  if (allowedValues.includes(contentJustify!)) {
    return css`
      justify-content: ${contentJustify!} !important;
    `;
  } else {
    return "";
  }
};
