import {percentage} from "../utils";
import ColumnOffset from "./ColumnOffset";

export default (offset?: ColumnOffset): string => {
  // the next expression is for JS projects
  // tslint:disable:strict-type-predicates
  if (
    offset != null &&
    typeof offset === "number" &&
    offset > 0 &&
    offset < 12
  ) {
    return `margin-left: ${percentage(offset)}%;`;
  }
  // tslint:enable:strict-type-predicates

  return "";
};
