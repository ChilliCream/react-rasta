import {SimpleInterpolation} from "styled-components";
import {BreakpointMap} from "../media";
import _css from "./css";

export default (breakpoints: BreakpointMap, key: string) => (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): string => {
  const minWidth = breakpoints[key];
  const mediaBody = _css(strings, ...interpolations);

  if (minWidth && mediaBody.match(/\S/g)) {
    return _css`
        @media (min-width: ${minWidth}px) {
          ${mediaBody}
        }
      `;
  }

  return mediaBody;
};
