import RowWrap from "./RowWrap";
import { css, equals } from "../utils";

function renderWrap(wrap?: RowWrap): string {
  if (wrap == null) {
    return renderWrap("wrap");
  }

  if (equals(wrap, ["nowrap", "wrap", "wrap-reverse"])) {
    return css`
      flex-wrap: ${wrap};
    `;
  }

  return "";
}

export default renderWrap;
