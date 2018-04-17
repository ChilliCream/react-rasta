import RowJustifyContent from "./RowJustifyContent";
import { css } from "../utils";

export default (contentJustify?: RowJustifyContent): string => {
  switch (contentJustify) {
    case "center":
      return css`
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
      `;

    case "flex-end":
      return css`
        -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
      `;

    case "flex-start":
      return css`
        -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
      `;

    case "space-around":
      return css`
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
      `;

    case "space-between":
      return css`
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
      `;

    default:
      return "";
  }
};
