import { Theme } from "../theme";
import { css } from "../utils";
import { Column } from "..";

export default function renderNoGutter(noGutter?: boolean): string {
  if (noGutter != null && typeof noGutter === "boolean" && noGutter) {
    return css`
      margin-right: 0;
      margin-left: 0;

      > ${Column} {
        padding-right: 0;
        padding-left: 0;
      }
    `;
  }

  return "";
}
