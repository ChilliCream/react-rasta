import {percentage} from "../utils";
import ColumnOffset from "./ColumnOffset";

export default (offset?: ColumnOffset): string => {
  if (
    offset != null &&
    typeof offset === "number" &&
    offset > 0 &&
    offset < 12
  ) {
    return `margin-left: ${percentage(offset)}%;`;
  }

  return "";
};
