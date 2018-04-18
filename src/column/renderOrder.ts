import ColumnOrder from "./ColumnOrder";

const renderOrder = (order?: ColumnOrder | 0 | 13): string => {
  if (order != null && typeof order !== "object") {
    if (order === "first") {
      return renderOrder(0);
    }

    if (order === "last") {
      return renderOrder(13);
    }

    if (typeof order === "number") {
      return `
        order: ${order - 1};
      `;
    }
  }

  return "";
};

export default renderOrder;
