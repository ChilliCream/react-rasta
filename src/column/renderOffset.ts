import ColumnOffset from "./ColumnOffset";
import { percentage } from "../utils";

export default function renderOrder(offset?: ColumnOffset): string {
  if (
    offset != null &&
    typeof offset === "number" &&
    offset > 0 &&
    offset < 12
  ) {
    return `
      margin-left: ${percentage(offset)}%;
    `;
  }

  return "";
}
