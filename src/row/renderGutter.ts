import Column from "../column";
import {gutterWidth, Theme} from "../theme";
import {css} from "../utils";

export default (noGutter?: boolean, theme?: Theme): string => {
  if (noGutter != null && typeof noGutter === "boolean" && noGutter) {
    return css`
      margin-right: 0;
      margin-left: 0;

      > ${Column} {
        padding-right: 0;
        padding-left: 0;
      }
    `;
  } else {
    const width = gutterWidth(theme);

    return css`
      margin-right: -${width}px;
      margin-left: -${width}px;

      > ${Column} {
        padding-right: ${width}px;
        padding-left: ${width}px;
      }
    `;
  }
};
