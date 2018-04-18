import ColumnSize from "./ColumnSize";
import { percentage } from "../utils";

export default (size?: ColumnSize): string => {
  if (size == null || typeof size === "object" || size < 1 || size > 12) {
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
