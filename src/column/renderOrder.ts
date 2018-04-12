import ColumnOrder from "./ColumnOrder";

export default function renderOrder(order?: ColumnOrder | 0 | 13): string {
  if (order != null && typeof order !== "object") {
    if (order === "first") {
      return renderOrder(0);
    }

    if (order === "last") {
      return renderOrder(13);
    }

    if (typeof order === "number") {
      return `
        -webkit-box-ordinal-group: ${order};
        -ms-flex-order: ${order - 1};
        order: ${order - 1};
      `;
    }
  }

  return "";
}
