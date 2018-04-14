import ColumnSize from "./ColumnSize";
import { percentage } from "../utils";

export default (size?: ColumnSize): string => {
  if (size == null || typeof size === "object" || size < 1 || size > 12) {
    return "";
  }

  if (size === "none") {
    return `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    `;
  }

  if (size === "auto") {
    return `
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    `;
  }

  const calculatedPercentage = percentage(size);

  return `
    -webkit-box-flex: 0;
    -ms-flex: 0 0 ${calculatedPercentage}%;
    flex: 0 0 ${calculatedPercentage}%;
    max-width: ${calculatedPercentage}%;
  `;
};
