import {css} from "../utils";
import RowWrap from "./RowWrap";

function renderWrap(wrap?: RowWrap): string {
  const allowedValues = ["nowrap", "wrap", "wrap-reverse"];

  // the next expression is for JS projects
  // tslint:disable-next-line:strict-type-predicates
  if (wrap == null || !allowedValues.includes(wrap)) {
    return renderWrap("wrap");
  } else {
    return css`
      flex-wrap: ${wrap};
    `;
  }
}

export default renderWrap;
