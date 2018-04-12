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

    if (minWidth == null || minWidth === 0) {
      return _css(strings, ...interpolations);
    }

    return _css`
      @media (min-width: ${minWidth}px) {
        ${css(strings, ...interpolations)};
      }
    `;
  };
};
