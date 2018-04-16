import { SimpleInterpolation } from "styled-components";
import _css from "./css";
import { BreakpointMap } from "../media";
import { css } from "../theme/StyledComponents";

export default (breakpoints: BreakpointMap, key: string) => {
  return (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): string => {
    const minWidth = breakpoints[key];
    const mediaBody = _css(strings, ...interpolations);

    if (
      minWidth == null ||
      minWidth === 0 ||
      mediaBody.replace(/\n|\r|\s|\t/gi, "").length === 0 // todo: find a better check for empty results
    ) {
      return mediaBody;
    }

    return _css`
      @media (min-width: ${minWidth}px) {
        ${mediaBody}
      }
    `;
  };
};
