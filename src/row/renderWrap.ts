import RowWrap from "./RowWrap";
import { css, equals } from "../utils";

function renderWrap(wrap?: RowWrap): string {
  if (wrap == null || !equals(wrap, ["nowrap", "wrap", "wrap-reverse"])) {
    return renderWrap("wrap");
  } else {
    return css`
      flex-wrap: ${wrap};
    `;
  }
}

export default renderWrap;
