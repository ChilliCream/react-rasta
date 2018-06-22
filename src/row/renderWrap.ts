import {css} from "../utils";
import RowWrap from "./RowWrap";

function renderWrap(wrap?: RowWrap): string {
  const allowedValues = ["nowrap", "wrap", "wrap-reverse"];

  if (wrap == null || !allowedValues.includes(wrap)) {
    return renderWrap("wrap");
  } else {
    return css`
      flex-wrap: ${wrap};
    `;
  }
}

export default renderWrap;
