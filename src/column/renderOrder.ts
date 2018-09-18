import ColumnOrder from "./ColumnOrder";

const renderOrder = (order?: ColumnOrder | 0 | 13): string => {
  // the next expression is for JS projects
  // tslint:disable:strict-type-predicates
  if (order !== undefined && typeof order !== "object") {
    if (order === "first") {
      return renderOrder(0);
    }

    if (order === "last") {
      return renderOrder(13);
    }

    // the next expression is for JS projects
    if (typeof order === "number") {
      return `order: ${order - 1};`;
    }
  }
  // tslint:enable:strict-type-predicates

  return "";
};

export default renderOrder;
