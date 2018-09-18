import {percentage} from "../utils";
import ColumnSize from "./ColumnSize";

export default (size?: ColumnSize): string => {
  // the next expression is for JS projects
  // tslint:disable-next-line:strict-type-predicates
  if (size === undefined || typeof size === "object" || size < 1 || size > 12) {
    return "";
  }

  if (size === "none") {
    return `
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    `;
  }

  if (size === "auto") {
    return `
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    `;
  }

  const calculatedPercentage = percentage(size);

  return `
    flex: 0 0 ${calculatedPercentage}%;
    max-width: ${calculatedPercentage}%;
  `;
};
